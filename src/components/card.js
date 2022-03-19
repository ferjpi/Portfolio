import React, { useState } from "react"
import Styled from "styled-components"
import noise from "../images/noise2.png"
import { motion } from "framer-motion"

const CardContainer = Styled.div`
  inline-size: 350px;

  margin: 0 2%;
  padding: 7px;
`

const CardBlur = Styled.div`
  background: rgba(255,255,255,0.6);
  backdrop-filter: blur(8px);
  height: 100%;
  width: 100%;
`

const ImgContainer = Styled.div`
  box-shadow: 3px 3px #000;
  border: 1px solid black;
  margin-bottom: 1rem;
  block-size: 13rem;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    margin-bottom: 0;
  }
`

const BodyContainer = Styled.div`
  padding: 5px;
`

function Card({ title, img, date, desc, title_icon = null }) {
  return (
    <>
      <CardContainer
        as={motion.div}
        initial={{ y: 0 }}
        whileHover={{ y: -10, scale: 1.07 }}
      >
        <ImgContainer>
          <motion.img
            src={img}
            alt="dog"
            initial={{ y: 0 }}
            whileHover={{ y: -25, scale: 1.15 }}
          />
        </ImgContainer>
        <BodyContainer>
          <h4>
            {title_icon} {title}
          </h4>
          <p>{desc}</p>
          <span>{date}</span>
        </BodyContainer>
      </CardContainer>
    </>
  )
}

export default Card
