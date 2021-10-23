import styles from "../styles/Nav.module.css";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <h2>Web Dev Blog</h2>
      <ul className={styles.links}>
        <li className={styles.links}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.links}>
          <Link href="/posts/first-post">Posts</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
