import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"
import { useTransform, useViewportScroll, motion } from "framer-motion"
import HomePortrait from "../components/homePortrait"
import BlogSection from "../components/blogSection"
import Profile from "../components/profile"
import "normalize.css"

const IndexPage = ({ data }) => {
  const blogData = data.allMarkdownRemark.edges

  const [currentPercent, setCurrentPercent] = useState(null)
  const [currentColor, setCurrentColor] = useState("#E1E1E1")
  const { scrollYProgress } = useViewportScroll()
  const yRange = useTransform(scrollYProgress, [0, 1], [0, 100])

  useEffect(
    () =>
      yRange.onChange(v => {
        console.log("v ", v)
        console.log("yRange.current ", yRange.current)
        setCurrentPercent(Math.trunc(yRange.current))
      }),
    [yRange]
  )

  useEffect(() => {
    setCurrentColor(
      currentPercent >= 75
        ? "#F2BD1D"
        : currentPercent >= 35
        ? "#31A9D5"
        : "#E1E1E1"
    )
  }, [currentPercent])

  return (
    <motion.main
      initial={{ background: currentColor }}
      animate={{ background: currentColor }}
      transition={{ delay: 0.5, type: "spring", stiffness: 60 }}
    >
      <HomePortrait />
      <Profile />
      <BlogSection blogData={blogData} />
    </motion.main>
  )
}

export default IndexPage

export const query = graphql`
  query Posts {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      limit: 4
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            image
            date
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`
