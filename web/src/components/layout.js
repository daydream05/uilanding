/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

/** @jsx jsx */
import { jsx } from "theme-ui"

import { Header } from "./header"
import { Footer } from "./footer"

import { mediaQueries, constants } from '../gatsby-plugin-theme-ui/tokens'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div
      sx={{
        minHeight: `100vh`,
        display: `flex`,
        flexDirection: `column`,
      }}
    >
      <Header siteTitle={data.site.siteMetadata.title} />
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
