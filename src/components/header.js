import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import '../css/header.css'

const Header = ({ siteTitle }) => (
  <header>
    <div className="page-wide">
      <h1>
        <Link
          to="/"
        >
          {siteTitle}
        </Link>
      </h1>
      <div className="navLinks">
        {/* <Link
          to="/portfolio"
        >
          Portfolio
        </Link> |  */}
        <Link
          to="/"
        >
          About
        </Link> | 
        <Link
          to="/resume"
        >
          R&eacute;sum&eacute;
        </Link> 
        {/* <a href="http://portfolio.aenigma.com/" target="_blank" rel="noreferrer">Portfolio</a>  */}
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
