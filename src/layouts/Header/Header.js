import React from "react"
import { Link } from "gatsby"
import MainNav from "../../components/MainNav/MainNav"
import Logo from "../../assets/images/logo.svg"
import styles from "./header.module.css"

const Header = ({ transparentHeader, toggleSidebar }) => {
  return (
    <header className={`${styles.header} ${transparentHeader ? styles.trans : ""}`}>
      <div className={styles.headerInner}>
        <div className={styles.logoWrapper}>
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
          <button type="button" className={styles.mobileToggle} onClick={toggleSidebar}>
            <span className="sr-only">Open sidebar</span>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 448 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16 224h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16zm416 192H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm3.17-384H172.83A12.82 12.82 0 0 0 160 44.83v38.34A12.82 12.82 0 0 0 172.83 96h262.34A12.82 12.82 0 0 0 448 83.17V44.83A12.82 12.82 0 0 0 435.17 32zm0 256H172.83A12.82 12.82 0 0 0 160 300.83v38.34A12.82 12.82 0 0 0 172.83 352h262.34A12.82 12.82 0 0 0 448 339.17v-38.34A12.82 12.82 0 0 0 435.17 288z"></path>
            </svg>
          </button>
        </div>
        <MainNav desktop />
      </div>
    </header>
  )
}

export default Header
