import React from "react"
import Styled from "styled-components"
import Card from "../card"

const ArticleStl = Styled.article`
  display: flex;

`

const ArticleContainerStl = Styled.section`
  display: flex;
  flex-wrap: wrap;

  @media(min-width: 680px) and (max-width: 800px) {
    justify-content: space-between;
  }

  @media(min-width: 800px) {
    justify-content: space-between;
  }

  @media(min-width: 1470px) {
    display: grid;
    grid-template-columns: repeat(4,1fr);
  }
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
