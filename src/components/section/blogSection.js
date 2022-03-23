import React from "react"
import Styled from "styled-components"
import { Link } from "gatsby"
import Card from "../card"

const BlogContainerStyle = Styled.section`
  padding: 2rem;
`

const SectionTitle = Styled.h2`
  font-size: 2rem;
  font-weight: 600;
`

const SectionList = Styled.div`
  flex-direction: column;

  @media(min-width: 600px) {
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    flex-wrap: wrap;
  }
`

function BlogSection({ blogData }) {
  console.log("blogData ", blogData)
  return (
    <>
      <BlogContainerStyle>
        <Link to="posts">
          <SectionTitle>Blog</SectionTitle>
        </Link>
        <SectionList>
          {blogData !== undefined &&
            blogData.length &&
            blogData.map(({ node: post }) => (
              <Card
                key={post.id}
                title={post.frontmatter.title}
                img={post.frontmatter.image}
                date={post.frontmatter.date}
                desc={post.excerpt}
                isLink={true}
                slug={post.fields.slug}
              />
            ))}
        </SectionList>
      </BlogContainerStyle>
    </>
  )
}

export default BlogSection
