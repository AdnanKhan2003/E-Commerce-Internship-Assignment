import styles from "./CartSidebar.module.css";
import CartSidebarContent from "./CartSidebarContent";

function CartSidebar({ data }) {
  const individualPrice = data.map((prod) => Math.round(prod.price));
  const individualDiscountedPrice = data.map((prod) =>
    Math.round(prod.price * (75 / 100))
  );
  const quantity = data.map((prod) => prod.quantity);
  const totalPrice = individualPrice.map((prod, i) => prod * quantity[i]);
  const totalDiscountedPrice = individualDiscountedPrice.map(
    (prod, i) => prod * quantity[i]
  );
  const priceDifference = individualPrice.map(
    (price, i) => price - individualDiscountedPrice[i]
  );

  const discountedPrice = totalDiscountedPrice.reduce(
    (acc, price) => acc + price,
    0
  );
  const discountedPriceTotal = priceDifference.map(
    (price, i) => price * quantity[i]
  );

  const price = totalPrice.reduce((acc, price) => acc + price, 0);
  const total = totalDiscountedPrice.reduce((acc, price) => acc + price, 0);
  const discount = priceDifference.reduce((acc, price) => acc + price, 0);
  const moneySaved = discountedPriceTotal.reduce(
    (acc, price) => acc + price,
    0
  );

  const billData = [
    { title: "Price", data: `$${price}`, id: 1 },
    { title: "Discount", data: `$${moneySaved}`, id: 2 },
    { title: "Delivery", data: "Free", id: 3 },
  ];

  return (
    <aside>
      <h1>Price Details</h1>
      <hr />
      <ul className={styles.sidebar_list_container}>
        {billData.map((bill) => (
          <CartSidebarContent
            key={bill.id}
            id={bill.id}
            title={bill.title}
            data={bill.data}
          />
        ))}

        <hr className={styles.line} />
        <CartSidebarContent title="Total Amount" data={`$${total}`} />
      </ul>
    </aside>
  );
}

export default CartSidebar;
