import React from "react"

import Layout from "../components/layout"
import { graphql } from "gatsby"
import Theme from "../components/theme/theme"

function PostPage({ data, location }) {
  return (
    <Theme>
      <Layout location={location}>
        <div>
          <h1>{data.markdownRemark.frontmatter.title}</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: data.markdownRemark.html,
            }}
          ></div>
          {/* <p>{data.markdownRemark.excerpt}</p> */}
        </div>
      </Layout>
    </Theme>
  )
}

// $slug viene del context que se definio en gatsby node
export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

export default PostPage