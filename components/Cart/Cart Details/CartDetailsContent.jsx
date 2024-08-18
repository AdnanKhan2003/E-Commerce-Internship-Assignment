import Link from "next/link";
import CartItemQuantity from "./CartItemQuantity";

function CartDetailsContent({ data }) {
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
          <h1>{data.title}</h1>
          <p>{data.description}</p>
        </Link>
      </div>
    </>
  );
}

export default CartDetailsContent;
