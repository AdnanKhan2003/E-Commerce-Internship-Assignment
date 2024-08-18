import styles from "./ProductItem.module.css";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import ProductItemBottomContent from "./ProductItemBottomContent";

function ProductItem({ item }) {
  item.quantity = 1;
  return (
    <motion.li
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: -20, opacity: 1 }}
      transition={{ type: "tween", duration: 1 }}
      className={styles.products_item}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: "tween", duration: 3 }}
        className={styles.image_container}
      >
        <Link href={`/${item.id}`}>
          <Image
            className={styles.padding}
            src={item.image}
            alt={item.title}
            fill
          />
        </Link>
      </motion.div>
      <ProductItemBottomContent item={item} />
    </motion.li>
  );
}

export default ProductItem;
