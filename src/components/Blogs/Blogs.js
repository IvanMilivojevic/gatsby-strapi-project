import React from "react"
import { Link } from "gatsby"
import SectionTitle from "../SectionTitle/SectionTitle"
import Blog from "./Blog"
import styles from "./blogs.module.css"

const Blogs = ({ blogs, title, moreLink }) => {
  return (
    <section className={`bg-white section-content`}>
      <SectionTitle>{title}</SectionTitle>
      <div className={`section-center ${styles.blogArticles}`}>
        {blogs.map(blog => {
          return <Blog key={blog.id} {...blog} />
        })}
      </div>
      {moreLink && (
        <Link to="/blog" className="btn action-button">
          Blog
        </Link>
      )}
    </section>
  )
}

export default Blogs
