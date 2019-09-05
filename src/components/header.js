import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#ECEFF1`,
      borderBottom: `1px solid rgba(136, 136, 136, 0.12)`
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        padding: `0.5rem 0`,
        width: `90%`
      }}
    >
      <Link
        to="/"
        style={{
          fontFamily: 'Roboto, sans-serif',
          color: `black`,
          textDecoration: `none`,
          fontWeight: '400'
        }}
      >
        {siteTitle}
      </Link>
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
