import React from "react"
import Layout from "../layouts/Layout"
import styles from "../layouts/Primary/error-page.module.css"

const NotFoundPage = () => {
  return (
    <Layout>
      <div className={styles.errorContent}>
        <h1>Wrong Turn</h1>
        <p>We didn't find the page you were looking for</p>
      </div>
    </Layout>
  )
}

export default NotFoundPage
