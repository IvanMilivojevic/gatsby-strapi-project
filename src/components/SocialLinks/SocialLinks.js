import React from "react"
import { FaFacebookSquare, FaLinkedin, FaGithub } from "react-icons/fa"
import styles from "./socialLinks.module.css"

const SocialLinks = ({ footer }) => {
  return (
    <ul className={`${styles.socialMenu} ${footer ? styles.footerSocial : ""}`}>
      <li>
        <a href="https://www.linkedin.com/in/ivan-milivojevic-a14b9b137/" target="_blank" rel="noopener noreferrer">
          <span className="sr-only">Facebook</span>
          <FaFacebookSquare />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/ivan-milivojevic-a14b9b137/" target="_blank" rel="noopener noreferrer">
          <span className="sr-only">Linkedin</span>
          <FaLinkedin />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/ivan-milivojevic-a14b9b137/" target="_blank" rel="noopener noreferrer">
          <span className="sr-only">Github</span>
          <FaGithub />
        </a>
      </li>
    </ul>
  )
}

export default SocialLinks
