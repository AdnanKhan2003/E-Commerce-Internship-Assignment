import CartItemQuantity from "./CartItemQuantity";
import Link from "next/link";

import styles from "./CartDetails.module.css";

export default function CartDetails({ data }) {
  return (
    <>
      <div className={styles.cart_item_1}>
        <div>
          <Link href={`/${data.id}`}>
            <img src={data.image} alt={data.title} />
          </Link>
          <div className={styles.quantity}>
            <CartItemQuantity data={data} />
          </div>
        </div>
      </div>
      <div className={styles.cart_item_2}>
        <Link href={`/${data.id}`}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.description}>{data.description}</p>
        </Link>
      </div>
    </>
  );
}
