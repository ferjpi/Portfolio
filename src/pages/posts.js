import React from "react"
import { graphql } from "gatsby"

import MainContainer from "../components/mainContainer"
import PostListing from "../components/post/PostListing"
import Seo from "../components/seo"

// css
import "./posts.css"

const posts = ({ data }) => {
  const myData = data.allMarkdownRemark.edges

  return (
    <MainContainer>
      <div className="content">
        <Seo title="Blog" />
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
    allMarkdownRemark(sort: {fields: frontmatter___date, order: ASC}) {
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
