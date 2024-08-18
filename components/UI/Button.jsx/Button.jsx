"use client";

import styles from "./Button.module.css";

function Button({
  children,
  className = "",
  theme,
  size,
  id,
  noTheme,
  ...props
}) {
  const themeColor = `button_${theme || "light"}`;
  const themeNone = ``;
  const sizeBtn = `button_${size || "sm"}`;

  let classesThemeColor = `${noTheme ? styles[themeNone] : styles[themeColor]}`;

  const classes = `${styles.button} ${classesThemeColor} ${styles[sizeBtn]}`;
  return (
    <button className={`${classes} ${className}`} {...props}>
      {children}
    </button>
  );
}

export default Button;
