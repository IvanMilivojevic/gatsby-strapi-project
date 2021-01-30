import React from "react"
import Image from "gatsby-image"
import { FaGithub, FaLink, FaApple } from "react-icons/fa"
import styles from "./project.module.css"

const Project = ({ description, links, stack, title, image }) => {
  return (
    <article className={styles.project}>
      <Image className={styles.projectImage} fluid={image.childImageSharp.fluid} />
      <div className={styles.projectInfo}>
        <h2>{title}</h2>
        <div>{description}</div>
        <ul className={`inline-list ${styles.stack}`}>
          {stack.map(tech => {
            return <li key={tech.id}>{tech.name}</li>
          })}
        </ul>
        <ul className={`inline-list ${styles.links}`}>
          {links.map(source => {
            return (
              <li key={source.id}>
                <a href={source.link} target="_blank" rel="noreferrer">
                  <span className="sr-only">{source.title}</span>
                  {source.title === "github" ? <FaGithub /> : null}
                  {source.title === "website" ? <FaLink /> : null}
                  {source.title === "app" ? <FaApple /> : null}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </article>
  )
}

export default Project
