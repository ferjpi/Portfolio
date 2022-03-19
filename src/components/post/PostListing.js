import React from "react"
import Styled from "styled-components"
import { Link } from "gatsby"
import Card from "../card"

const ArticleStl = Styled.article`
  display: flex;
  margin: 0 10px;
`

const ArticleContainerStl = Styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const postListing = ({ posts }) => {
  console.log(posts)
  return (
    <ArticleContainerStl>
      {posts &&
        posts.map(({ node: post }) => (
          <ArticleStl key={post.id}>
            <Card
              key={post.id}
              title={post.frontmatter.title}
              img={post.frontmatter.image || ""}
              date={post.frontmatter.date}
              desc={post.excerpt}
              isLink={true}
              slug={post.fields.slug}
            />
          </ArticleStl>
        ))}
    </ArticleContainerStl>
  )
}

export default postListing
