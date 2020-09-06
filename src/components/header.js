import React, { useContext } from "react"
import PropTypes from "prop-types"

import { Link } from "gatsby"
import { ThemeContext } from "./theme/theme"

import Switch from "./Switch"

// css
import "./header.css"

const Header = ({ postCtx }) => {
  const { state } = useContext(ThemeContext)

  return (
    <header className={`header_container ${state}`}>
      <div className="header_container__inner">
        <div className="header_container_inner__links">
          <h1 className="header_container_inner__title">
            <Link to="/" className="container_inner_title__link">
              Home
            </Link>
          </h1>
          <span className="header_container_inner__line">{">>"}</span>
          <h1 className="header_container_inner__title">
            <Link to="/posts" className="container_inner_title__link">
              Posts
            </Link>
          </h1>
          <span className="header_container_inner__line">{">>"}</span>
          <h1 className="header_container_inner__title">
            <Link
              to={postCtx && postCtx.slug}
              className="container_inner_title__link"
            >
              {postCtx && postCtx.title}
            </Link>
          </h1>
        </div>
        <div className="header_container_inner__preference">
          <Switch />
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
