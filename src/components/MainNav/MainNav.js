import React from "react"
import { Link } from "gatsby"
import styles from "./mainNav.module.css"

const MainNav = ({ desktop }) => {
  return (
    <nav className={`${styles.mainNav} ${desktop ? styles.desktopNav : ""}`}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default MainNav
