import React from "react"

import MainContainer from "../components/mainContainer"
// import HeaderAboutMe from "../components/HeaderAboutMe"
// import ContentAboutMe from "../components/ContentAboutMe"
import PortfolioComp from "../components/portfolio"
import SEO from "../components/seo"

const Portfolio = () => (
  <MainContainer>
    <div className="content">
      <SEO title="portfolio" />
      <PortfolioComp />
    </div>
  </MainContainer>
)

export default Portfolio
