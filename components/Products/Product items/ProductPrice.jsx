import styles from "./ProductPrice.module.css";

function ProductPrice({ item }) {
  const price = Math.round(item.price);
  const discountedPrice = Math.round(item.price * (75 / 100));
  return (
    <div>
      <span>
        <p className={styles.discounted_price}>${price}</p>
        <p className={styles.price}>${discountedPrice}</p>
      </span>
    </div>
  );
}

export default ProductPrice;
