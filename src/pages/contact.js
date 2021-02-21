import React from "react"
import Layout from "../layouts/Layout"
import SEO from "../layouts/Seo/Seo"
import styles from "../layouts/Primary/contact.module.css"

const Contact = () => {
  return (
    <Layout>
      <SEO title="Contact" description="Contact me about some project" />
      <section className={`section-content ${styles.contact}`}>
        <div className={`section-center ${styles.contactInner}`}>
          <h1>Contact</h1>
          <form action="https://formspree.io/f/myybavke" method="POST">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" placeholder="Name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" placeholder="Email" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="5" placeholder="Message"></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>
    </Layout>
  )
}

export default Contact
