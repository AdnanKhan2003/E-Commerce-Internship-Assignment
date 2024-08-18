"use client";

import CartSidebarContainer from "./Cart Sidebar/CartSidebarContainer";
import CartDetailsContainer from "./Cart Details/CartDetailsContainer";

import { motion } from "framer-motion";

import styles from "./Cart.module.css";

function Cart() {
  return (
    <motion.section
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, type: "tween" }}
      className={styles.cart_wrapper}
    >
      <main className={`section_spacing ${styles.cart_container}`}>
        <div className={styles.cart_sub_container_1}>
          <CartDetailsContainer />
        </div>
        <div className={styles.cart_sub_container_2}>
          <CartSidebarContainer />
        </div>
      </main>
    </motion.section>
  );
}

export default Cart;
