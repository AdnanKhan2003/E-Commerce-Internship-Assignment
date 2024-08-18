import styles from "./LoadingIndicator.module.css";

export default function LoadingIndicator() {
  return (
    <div className={styles.lds_ring}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
