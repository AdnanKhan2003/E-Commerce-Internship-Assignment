import Link from "next/link";
import styles from "./MainHeader.module.css";

import LocalMallIcon from "@mui/icons-material/LocalMall";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import HeaderCart from "./HeaderCart";

function MainHeader({ fillColor }) {
  return (
    <header className={styles.main_header}>
      <nav className={`section_spacing ${styles.nav_spacing}`}>
        <div className="container">
          <Link href="/">
            <LocalMallIcon
              fill="#68a2f"
              className={styles.nav_link_item}
              style={{ color: fillColor || "blue" }}
            />
          </Link>

          <ul className={styles.nav_list_container}>
            <Link href="/">
              <li className={styles.nav_link_item}>Home</li>
            </Link>
            <Link href="/cart">
              <li className={styles.nav_link_item}>
                <HeaderCart />
              </li>
            </Link>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default MainHeader;
