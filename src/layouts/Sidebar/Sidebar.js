import React from "react"
import { FaWindowClose } from "react-icons/fa"
import SocialLinks from "../../components/SocialLinks/SocialLinks"
import MainNav from "../../components/MainNav/MainNav"
import styles from "./sidebar.module.css"

const Sidebar = ({ open, toggleSidebar }) => {
  return (
    <aside className={`${styles.sidebar} ${open ? styles.show : ""}`}>
      <button className={styles.closeButton} onClick={toggleSidebar}>
        <FaWindowClose />
      </button>
      <MainNav />
      <SocialLinks />
    </aside>
  )
}

export default Sidebar
