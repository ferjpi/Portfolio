import React from "react"
import Styled from "styled-components"
import Seo from "./seo"

const MainContainerStyle = Styled.section`
  padding: 2rem;
  max-block-size: 100vh;
  min-block-size: 100vh;
  block-size: 100%;
  display: flex;
  flex-direction: column;
`
const NavStyle = Styled.nav`
  flex-grow: 1;
`
const ResponsiveTitle = Styled.div`
  max-inline-size: 1100px;
  inline-size: clamp(10vw, 50vw, 1100px);
  flex-grow: 2;
  align-items: center;

  h1 {
    font-size: 7rem;
  }
`

function HomePortrait() {
  return (
    <>
      <Seo
        title="Portrait - Fernando Pineda (ferjpi)"
        meta={[
          {
            name: `description`,
            content: "Website of Fernando Pineda - ferjpi. Home page",
          },
          {
            property: `og:title`,
            content: "Blog - Fernando pineda (ferjpi)",
          },
        ]}
      />
      <MainContainerStyle>
        <NavStyle>
          <h3>Fernando Pineda</h3>
        </NavStyle>

        <ResponsiveTitle>
          <h1>Full Stack Developer</h1>
        </ResponsiveTitle>
      </MainContainerStyle>
    </>
  )
}

export default HomePortrait
