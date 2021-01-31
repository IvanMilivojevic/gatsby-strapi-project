import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import styles from "./blog.module.css"

const Blog = ({ category, date, description, slug, title, image }) => {
  return (
    <article className={styles.blogWrapper}>
      <Link to={`/blog/${slug}`} className={styles.blogCard}>
        <Image fluid={image.childImageSharp.fluid} />
        <div className={styles.blogCardInfo}>
          <h2>{title}</h2>
          <div className={styles.desc}>{description}</div>
          <div className={styles.blogMeta}>
            <span className={styles.category}>{category}</span>
            <span>{date}</span>
          </div>
        </div>
      </Link>
    </article>
  )
}

export default Blog
