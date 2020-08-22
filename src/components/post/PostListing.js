import React from "react"
import { Link } from "gatsby"

// css
import "./PostListing.css"

const postListing = ({ post }) => {
  return (
    <article>
      <h3 className="list_post_title">
        <Link to={post.fields.slug} className="list_post_title__link">
          {post.frontmatter.title}
        </Link>
      </h3>
      <span>{post.frontmatter.date}</span>
      <p>{post.excerpt}</p>
    </article>
  )
}

export default postListing
