import { navLinks } from "../data";
import styles from "./Navbar.module.css";

export default function Navbar({ menuOpen, setMenuOpen, scrolled }) {
  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <a href="/" className={styles.logo}>
        <span className={styles.logoMark}>GH</span>
        Get Hyped
      </a>

      <button
        className={`${styles.burger} ${menuOpen ? styles.open : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  );
}
