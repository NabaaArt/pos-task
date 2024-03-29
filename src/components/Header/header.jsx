import Link from "next/link";
import AppContainer from "../Contaner/container";
import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <AppContainer width={1300}>
        <div className={styles.content}>
          <h2>LOGO</h2>
          <ul>
            <li>Home</li>
            <li><Link href='/products'>Products</Link> </li>
            <li><Link href='/categories'>Categories</Link></li>
            <li> <Link href='/invoice'>Invoices</Link> </li>
          </ul>
        </div>
      </AppContainer>
    </div>
  );
};

export default Header;
