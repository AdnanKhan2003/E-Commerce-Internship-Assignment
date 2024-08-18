"use client";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import { useSelector } from "react-redux";

import styles from "./HeaderCart.module.css";

function HeaderCart({ className }) {
  const cartItems = useSelector((state) => state.cart);
  const cartItemsQuantity = cartItems.length;

  return (
    <>
      <ShoppingCartOutlinedIcon />
      {cartItemsQuantity > 0 && (
        <div className={styles.cart_items_quantity}>{cartItemsQuantity}</div>
      )}
    </>
  );
}

export default HeaderCart;
