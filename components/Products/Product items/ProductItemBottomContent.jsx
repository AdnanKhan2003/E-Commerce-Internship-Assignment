import styles from "./ProductItemBottomContent.module.css";
import ProductPrice from "./ProductPrice.jsx";
import Link from "next/link";
import ProductItemCartButton from "./ProductItemCartButton";
import { motion } from "framer-motion";

function ProductItemBottomContent({ item }) {
  const title = item.title.slice(0, 35);
  const description = item.description.slice(0, 60);

  return (
    <motion.div
      whileHover={{ y: -20 }}
      transition={{ type: "tween", stiffness: 500 }}
      className={styles.bottom_content}
    >
      <Link href={`/${item.id}`}>
        <h1 className={styles.title}>{title}...</h1>
        <p className={styles.description}>{description}...</p>
      </Link>
      <Link href={`/${item.id}`}>
        <div>
          <ProductPrice item={item} />
        </div>
      </Link>
      <div>
        <div className={styles.button_container}>
          <ProductItemCartButton item={item} />
        </div>
      </div>
    </motion.div>
  );
}

export default ProductItemBottomContent;
