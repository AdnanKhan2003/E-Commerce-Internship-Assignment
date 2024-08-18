"use client";
import Button from "@/components/UI/Button.jsx/Button";
import styles from "./ProductItemCartButton.module.css";

import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "@/lib/slices/add-to-cart";

function ProductItemCartButton({ item }) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.cart);

  let onCart = state.find((prod) => prod.id == item.id);

  function handleClick(item) {
    const itemExists = state.filter((cartItem) => cartItem.id == item.id);

    if (itemExists.length === 0) {
      dispatch(cartActions.addToCart(item));
    }
  }

  return (
    <Button
      className={onCart?.id ? styles.active : styles.bg_color}
      noTheme
      onClick={() => handleClick(item)}
      id={item.id}
      theme="light"
      size="md"
    >
      {onCart ? "Added to Cart" : "Add To Cart"}
    </Button>
  );
}

export default ProductItemCartButton;
