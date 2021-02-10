import React from "react"
import SocialLinks from "../../components/SocialLinks/SocialLinks"
import styles from "./footer.module.css"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <SocialLinks footer />
      <div>Coryright 2021</div>
    </footer>
  )
}

export default Footer
