/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useContext } from "react"
import PropTypes from "prop-types"
import { ThemeContext } from "./theme/theme"

import Header from "./header"
import "./layout.css"

const Layout = ({ children, postCtx }) => {
  const { state } = useContext(ThemeContext)

  return (
    <div className={`layout ${state}`}>
      <Header postCtx={postCtx} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main className={`main_content ${state}`}>{children}</main>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
