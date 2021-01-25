import React from "react"
import styles from "./socialLinks.module.css"

const SocialLinks = () => {
  return (
    <ul className={styles.socialMenu}>
      <li>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <span className="sr-only">Facebook</span>
        </a>
      </li>
      <li>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <span className="sr-only">Linkedin</span>
        </a>
      </li>
      <li>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <span className="sr-only">Github</span>
        </a>
      </li>
    </ul>
  )
}

export default SocialLinks
