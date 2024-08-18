"use client";

import CartSidebar from "./CartSidebar";
import { useSelector } from "react-redux";

function CartSidebarContainer() {
  const cartData = useSelector((state) => state.cart);

  return <CartSidebar data={cartData} />;
}

export default CartSidebarContainer;
