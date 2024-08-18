import styles from "./CartSidebarContent.module.css";

function CartSidebarContent({ title, data, id }) {
  return (
    <li className={styles.sidebar_list}>
      <p>{title}</p>
      <p>{data} </p>
    </li>
  );
}

export default CartSidebarContent;
