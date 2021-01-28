import React from "react"
import Layout from "../layouts/Layout"
import Hero from "../components/Hero/Hero"
import Services from "../components/Services/Services"
import Jobs from "../components/Jobs/Jobs"

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Services />
      <Jobs />
    </Layout>
  )
}

export default Home
