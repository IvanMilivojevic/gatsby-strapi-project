import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import SocialLinks from "../SocialLinks/SocialLinks"
import styles from "./hero.module.css"

const Hero = () => {
  const data = useStaticQuery(graphql`
    {
      avatar: file(relativePath: { eq: "avatar.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 650, maxHeight: 650, cropFocus: CENTER) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <section className={styles.hero}>
      <div className={styles.heroInner}>
        <div className={styles.heroInfo}>
          <h1>I'm John</h1>
          <h2>freelance web and mobile UI/UX Designer</h2>
          <Link to="/contact" className="btn">
            Contact Me
          </Link>
          <SocialLinks />
        </div>
        <div className={styles.heroImage}>
          <Image fluid={data.avatar.childImageSharp.fluid} />
        </div>
      </div>
    </section>
  )
}

export default Hero
