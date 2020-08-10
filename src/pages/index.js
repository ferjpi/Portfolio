import React from "react"

import MainContainer from "../components/mainContainer"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <MainContainer>
    <div className="content">
      <Layout>
        <SEO title="Home" />
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
      </Layout>
    </div>
  </MainContainer>
)

export default IndexPage
