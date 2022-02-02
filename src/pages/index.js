import React from "react"

import MainContainer from "../components/mainContainer"
import HeaderAboutMe from "../components/HeaderAboutMe"
import ContentAboutMe from "../components/ContentAboutMe"
import Seo from "../components/seo"

const IndexPage = () => (
  <MainContainer>
    <div className="content">
      <Seo title="Home" />
      <HeaderAboutMe />
      <ContentAboutMe />
    </div>
  </MainContainer>
)

export default IndexPage
