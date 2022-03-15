import React, { useState } from "react"
import Styled from "styled-components"
import { motion } from "framer-motion"
import imgProfile from "../images/ProfileBig_cropped.png"

const ProfileContainer = Styled.section`
  min-block-size: 50vh;
  inline-size: 100%;
  display: flex;
  justify-content: flex-end;

  padding: 2rem;

  div {
    inline-size: 40vw;
  }
`

const SpanHi = Styled.span`
  font-family: "RecursiveBasic";
  font-size: 1.6em;
`

const ImgStyle = Styled.img`
  border: 3px solid black;
  border-radius: 50%;
  inline-size: clamp(35px, 55px, 70px);
  block-size: clamp(35px, 55px, 70px);
`

function Profile() {
  const [animWord, setAnimWord] = useState(false)
  return (
    <ProfileContainer>
      <div>
        <ImgStyle
          as={motion.img}
          src={imgProfile}
          whileHover={{ y: -20, scale: 1.25 }}
          onMouseEnter={() => setAnimWord(true)}
          onMouseLeave={() => setAnimWord(false)}
        />
        <p>
          <SpanHi
            as={motion.span}
            initial={{ background: "none" }}
            animate={
              animWord ? { background: "yellow" } : { background: "none" }
            }
            transition={{ duration: 1, type: "spring" }}
          >
            Hi!
          </SpanHi>{" "}
          my name is Fernando. I live in Bogotá, Colombia.
          <br />
          <br />
          I have experience working with frontend frameworks like ReactJS and
          AngularJS, also I've been getting into backend tech with NodeJS
          (ExpressJS and Fastify). <br />
          <br />
          I'd acquired some expertise in NoSQL with MongoDB and relational
          database with SQL and PostgresQL. And now, I'm experimenting with
          GraphQL.
          <br />
          <br />
          My new interest is Flutter and the Dart language.
        </p>
      </div>
    </ProfileContainer>
  )
}

export default Profile
