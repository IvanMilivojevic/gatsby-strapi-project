import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import Layout from "../layouts/Layout"
import SEO from "../layouts/Seo/Seo"
import styles from "../layouts/Primary/about-page.module.css"

const About = ({ data }) => {
  const {
    allStrapiAbout: { nodes },
  } = data
  const { image, info, stack, title } = nodes[0]

  return (
    <Layout>
      <SEO title="About" description="Small intro about me and my project" />
      <section className="section-content">
        <div className={`section-center ${styles.aboutContent}`}>
          <div className={styles.image}>
            <Image fluid={image.childImageSharp.fluid} />
          </div>
          <div className={styles.info}>
            <h1>{title}</h1>
            <div>{info}</div>
            <ul className={`inline-list ${styles.stack}`}>
              {stack.map(tech => {
                return <li key={tech.id}>{tech.name}</li>
              })}
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiAbout {
      nodes {
        image {
          childImageSharp {
            fluid(maxWidth: 650, maxHeight: 650, cropFocus: CENTER) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        info
        stack {
          id
          name
        }
        title
      }
    }
  }
`

export default About
