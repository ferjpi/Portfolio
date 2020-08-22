import React from "react"
import { graphql } from "gatsby"

import MainContainer from "../components/mainContainer"
import PostListing from "../components/post/PostListing"
import SEO from "../components/seo"

// css
import "./posts.css"

const posts = ({ data }) => {
  const myData = data.allMarkdownRemark.edges

  console.log("data", myData)
  return (
    <MainContainer>
      <div className="content">
        <SEO title="Home" />
        <section className="posts_container">
          <h3 className="posts_title">Posts</h3>
          {myData.map(({ node }) => (
            <PostListing key={node.id} post={node} />
          ))}
        </section>
      </div>
    </MainContainer>
  )
}

export default posts

export const query = graphql`
  query Posts {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
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
