import React from "react"
import Styled from "styled-components"
import Card from "../card"

const BlogContainerStyle = Styled.section`
  padding: 2rem;
`

const SectionTitle = Styled.h2`
  font-size: 2rem;
  font-weight: 600;
`

const SectionList = Styled.div`
  display: flex;
  justify-content: space-evenly;
`

function BlogSection({ blogData }) {
  console.log("blogData ", blogData)
  return (
    <>
      <BlogContainerStyle>
        <SectionTitle>Blog</SectionTitle>
        <SectionList>
          {blogData !== undefined &&
            blogData.length &&
            blogData.map(post => (
              <Card
                key={post.node.id}
                title={post.node.frontmatter.title}
                img={post.node.frontmatter.image}
                date={post.node.frontmatter.date}
                desc={post.node.excerpt}
              />
            ))}
        </SectionList>
      </BlogContainerStyle>
    </>
  )
}

export default BlogSection
