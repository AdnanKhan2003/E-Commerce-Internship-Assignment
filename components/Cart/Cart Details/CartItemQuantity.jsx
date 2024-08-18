"use client";

import Button from "../../UI/Button.jsx/Button";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { cartActions } from "@/lib/slices/add-to-cart";
import styles from "./CartItemQuantity.module.css";

function CartItemQuantity({ data }) {
  const dispatch = useDispatch();
  console.log("main", data);
  const state = useSelector((state) => state.cart);

  const currentItem = state.find((prod, i) => prod.id == data.id);

  const condition = currentItem ? currentItem.quantity > 1 : false;

  function handleIncrement() {
    dispatch(cartActions.increment(data));
  }
  function handleDecrement() {
    if (condition) {
      dispatch(cartActions.decrement(data));
    } else {
      dispatch(cartActions.removeFromCart(data));
    }
  }

  return (
    <>
      <Button className={styles.bg_color} onClick={handleDecrement} size="sm">
        -
      </Button>
      {console.log("currentItem", currentItem)}
      <p>{currentItem ? currentItem.quantity : 1}</p>
      <Button className={styles.bg_color} onClick={handleIncrement} size="sm">
        +
      </Button>
    </>
  );
}

export default CartItemQuantity;
