import React from "react"
import { graphql } from "gatsby"
import HomePortrait from "../components/homePortrait"
import BlogSection from "../components/blogSection"
import "normalize.css"

const IndexPage = ({ data }) => {
  console.log("data ", data)
  const blogData = data.allMarkdownRemark.edges
  console.log("data blogData ", blogData)

  return (
    <>
      <HomePortrait />
      <BlogSection blogData={blogData} />
    </>
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
