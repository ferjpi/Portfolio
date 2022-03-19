import React from "react"
import Styled from "styled-components"
import { HiHome } from "react-icons/hi"
import { graphql, Link } from "gatsby"

import MainContainer from "../components/mainContainer"
import PostListing from "../components/post/PostListing"
import Seo from "../components/seo"

// css
import "./posts.css"

const BlogContainerStyle = Styled.section`
  padding: 2rem;
`

const TitlePage = Styled.h3`
  font-family: "RecursiveBasic";
  a {
    font-size: inherit;
    font-family: inherit;
    font-weight: inherit;
  }
`

const posts = ({ data }) => {
  const myData = data.allMarkdownRemark.edges
  return (
    <BlogContainerStyle>
      <Seo title="Blog page" />
      <TitlePage>
        <Link to="/">
          <HiHome size={20} /> Home
        </Link>
        {">>"} Posts
      </TitlePage>
      <PostListing posts={myData} />
    </BlogContainerStyle>
  )
}

export default posts

export const queryPost = graphql`
  query PostsPage {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
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
