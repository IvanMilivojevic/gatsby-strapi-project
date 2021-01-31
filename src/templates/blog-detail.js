import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import ReactMarkdown from "react-markdown"
import Layout from "../layouts/Layout"
import styles from "../layouts/Primary/blog-detail.module.css"

const BlogDetail = ({ data }) => {
  const {
    strapiBlogs: { content, date, title, image },
  } = data

  return (
    <Layout>
      <div className="section-center">
        <h1>{title}</h1>
        <p>{date}</p>
        <Image fluid={image.childImageSharp.fluid} />
        <ReactMarkdown source={content} className={styles.blogContent} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query GetBlogArticle($slug: String) {
    strapiBlogs(slug: { eq: $slug }) {
      content
      date
      title
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`

export default BlogDetail
