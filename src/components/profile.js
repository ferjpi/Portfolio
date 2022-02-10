import React from "react"
import Styled from "styled-components"
import { motion } from "framer-motion"
import imgProfile from "../images/ProfileBig_cropped.png"

const ProfileContainer = Styled.section`
  block-size: clamp(30vh, 40vh, 50vh);
  inline-size: 100%;
  display: flex;
  justify-content: flex-end;

  div {
    inline-size: 40vw;
  }
`

const ImgStyle = Styled.img`
  border: 3px solid black;
  border-radius: 50%;
  inline-size: clamp(35px, 55px, 70px);
  block-size: clamp(35px, 55px, 70px);
`

function Profile() {
  return (
    <ProfileContainer>
      <div>
        <ImgStyle
          as={motion.img}
          src={imgProfile}
          animate={{ y: [0, -20, 0], scale: [1, 1.2, 1] }}
        />
        <p>
          I'm a software engineer specialized in frontend development more
          exactly as JavaScript as my main programming language. The framework
          that I use to create amazing websites is ReactJs but like a curious
          person I am, I have a background in other languages like Python and
          Ruby.
        </p>
      </div>
    </ProfileContainer>
  )
}

export default Profile
