import React from "react"

import Layout from "../components/layout"
import { graphql } from "gatsby"
import { defineCustomElements as deckDeckGoElement } from "@deckdeckgo/highlight-code/dist/loader"

import Theme from "../components/theme/theme"
import Seo from "../components/seo"

// css
import './postPage.css'

deckDeckGoElement()

function PostPage({ data, location, pageContext }) {
  const imgURL = data.markdownRemark.frontmatter.image;
  const imgExists = imgURL !== undefined && imgURL !== null && imgURL.length
  const imgName = imgExists && imgURL.split('/')[-1]
  return (
    <Theme>
      <Seo title={pageContext.title} description={data.markdownRemark.excerpt} />
      <Layout location={location} postCtx={pageContext}>
        <div>
          {
            imgExists?
            <img src={imgURL} alt={imgName} className="portrait_img" />
            : null
          }
          <h1>{data.markdownRemark.frontmatter.title}</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: data.markdownRemark.html,
            }}
          ></div>
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
        image
      }
      excerpt
    }
  }
`

export default PostPage
