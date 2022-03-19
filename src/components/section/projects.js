import React from "react"
import Styled from "styled-components"
import { DiAndroid } from "react-icons/di"
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
  justify-content: start;
`
const PomodoroProject = {
  title: "Dummy Pomodoro ",
  description:
    "A Pomodoro app that helps you manage time in an effective and wise manner. Managing time is an effective way is one of the greatest problems today.",
  image: logoPomodoro,
}

const Projects = () => {
  return (
    <BlogContainerStyle>
      <SectionTitle>Projects</SectionTitle>
      <SectionList>
        <Card
          key={`project-1`}
          title={PomodoroProject.title}
          img={PomodoroProject.image}
          date={""}
          desc={PomodoroProject.description}
          title_icon={<DiAndroid size={16} />}
        />
      </SectionList>
    </BlogContainerStyle>
  )
}

export default Projects
