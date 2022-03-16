import React from "react"
import Styled from "styled-components"
import Card from "../card"
import logoPomodoro from "../../images/Logo_dummy_pomodoro.png"

const BlogContainerStyle = Styled.section`
  padding: 2rem;
`

const SectionTitle = Styled.h2`
  font-size: 2rem;
  font-weight: 600;
`

const SectionList = Styled.div`
  display: flex;
  justify-content: space-evenly;
`

const Projects = () => {
  return (
    <BlogContainerStyle>
      <SectionTitle>Projects</SectionTitle>
      <SectionList>
        <Card
          key={`project-1`}
          title={"Dummy Pomodoro"}
          img={logoPomodoro}
          date={""}
          desc={"A dummy Pomodoro"}
        />
      </SectionList>
    </BlogContainerStyle>
  )
}

export default Projects
