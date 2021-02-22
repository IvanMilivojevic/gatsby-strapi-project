import React from "react"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ title, description, image, article }) => {
  const { pathname } = useLocation()
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

  const seo = {
    title: title ? `${title} | ${siteTitle}` : siteTitle,
    description: description || siteDesc,
    image: `${siteUrl}${image || siteImage}`,
    url: `${siteUrl}${pathname}`,
  }

  return (
    <Helmet title={seo.title} htmlAttributes={{ lang: "en" }}>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />

      {seo.url && <meta property="og:url" content={seo.url} />}
      {(article ? true : null) && <meta property="og:type" content="article" />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && <meta property="og:description" content={seo.description} />}
      {seo.image && <meta property="og:image" content={seo.image} />}

      <meta name="twitter:card" content="summary_large_image" />
      {/* {twitterUsername && <meta name="twitter:creator" content={twitterUsername} />} */}
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && <meta name="twitter:description" content={seo.description} />}
      {seo.image && <meta name="twitter:image" content={seo.image} />}
    </Helmet>
  )
}

export default SEO
