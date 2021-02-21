import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ title, description }) => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          siteTitle: title
          siteDesc: description
          siteAuthor: author
          siteImage: image
          siteUrl
        }
      }
    }
  `)

  const {
    site: {
      siteMetadata: { siteTitle, siteDesc, siteImage, siteUrl },
    },
  } = data

  return (
    <Helmet htmlAttributes={{ lang: "en" }}>
      <title>{title ? `${title} | ${siteTitle}` : siteTitle}</title>
      <meta name="description" content={description || siteDesc} />
      <meta name="image" content={`${siteUrl}${siteImage}`} />
    </Helmet>
  )
}

export default SEO
