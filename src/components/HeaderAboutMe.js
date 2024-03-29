import React from "react"
import { Link } from "gatsby"

import profile from "../images/ProfileBig.jpg"

// css
import "./HeaderAboutMe.css"

const HeaderAboutMe = () => {
  return (
    <div className="header_about_me">
      <div className="header_about_me__left">
        <h2 className="about_me_left__name">Fernando Pineda</h2>
        <span className="about_me_left__profession">Full Stack Developer</span>
        <p className="about_me_left__description">
          I'm a software engineer specialized in frontend development more
          exactly as JavaScript as my main programming language. The framework
          that I use to create amazing websites is ReactJs but like a curious
          person I am, I have a background in other languages like Python and
          Ruby.
        </p>
        <div className="about_me_left__buttons">
        </div>
      </div>
    </div>
  )
}

export default HeaderAboutMe
