import React from "react"
import PropTypes from "prop-types"
import Menu from './menu'
import Header from "./header"
import "./layout.css"

function Layout({ children }) {
  return (
    <>
      <Header siteTitle = '<SimpleViews />' />
      <Menu />
      <main css={{
        marginLeft: `250px`
      }}>
        {children}
      </main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
