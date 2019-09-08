import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    css={{
      background: `#ECEFF1`,
      borderBottom: `1px solid rgba(136, 136, 136, 0.12)`,
      position: `fixed`,
      width: `100%`,
      top: `0`,
      zIndex: `1`
    }}
  >
    <div
      css={{
        margin: `0 auto`,
        padding: `0.5rem 0`,
        paddingLeft: `35px`
      }}
    >
      <Link
        to="/"
        css={{
          color: `#000000`,
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
