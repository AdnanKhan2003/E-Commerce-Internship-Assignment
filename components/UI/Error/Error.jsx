import styles from "./Error.module.css";

export default function ErrorBlock({ title, message }) {
  return (
    <div className={`${styles.error_block}`}>
      <div className={`${styles.error_block_icon}`}>!</div>
      <div className={`${styles.error_block_text}`}>
        <h2>{title}</h2>
        <p>{message}</p>
      </div>
    </div>
  );
}
