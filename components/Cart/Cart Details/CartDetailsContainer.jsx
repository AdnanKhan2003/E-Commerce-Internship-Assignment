"use client";

import { useSelector } from "react-redux";

import styles from "./CartDetailsContainer.module.css";
import CartDetails from "./CartDetails";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

function CartDetailsContainer() {
  const cartData = useSelector((state) => state.cart);

  return (
    <ul>
      <AnimatePresence>
        {cartData.length >= 1 &&
          cartData.map((cart) => (
            <motion.li
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              key={cart.id}
              className={styles.cart_container}
            >
              <CartDetails data={cart} />
            </motion.li>
          ))}
      </AnimatePresence>

      {cartData.length < 1 && <p className="center">Add some items to cart</p>}
    </ul>
  );
}

export default CartDetailsContainer;
