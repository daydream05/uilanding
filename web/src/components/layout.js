/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

/** @jsx jsx */
import { jsx } from "theme-ui"

import { Header } from "./header"
import { Footer } from "./footer"


const Layout = ({ children }) => {
  return (
    <div
      sx={{
        minHeight: `100vh`,
        display: `flex`,
        flexDirection: `column`,
      }}
    >
      <Header />
      <main
        sx={{
          flex: 1,
        }}
      >
        {children}
      </main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
