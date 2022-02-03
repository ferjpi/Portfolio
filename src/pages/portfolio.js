import React from "react"

import MainContainer from "../components/mainContainer"
import PortfolioComp from "../components/portfolio"
import Seo from "../components/seo"

const Portfolio = () => (
  <MainContainer>
    <div className="content">
      <Seo title="portfolio" />
      <PortfolioComp />
    </div>
  </MainContainer>
)

export default Portfolio
