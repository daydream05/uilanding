import React from "react"
import { Link } from "gatsby"
import { FaInstagram, FaTwitter } from 'react-icons/fa'

/** @jsx jsx */
import { Container, jsx } from "theme-ui"

import { constants, mediaQueries } from '../gatsby-plugin-theme-ui/tokens'

export const Header = () => {
  return (
    <header
      sx={{
        height: constants.headerHeight,
        display: `flex`,
        alignItems: `center`,
      }}
    >
      <Container
        sx={{
          px: 4,
          display: `flex`,
          justifyContent: `space-between`,
          [mediaQueries.lg]: {
            px: 5
          }
        }}
      >
        <div>
          <Link
            to="/"
            sx={{
              textDecoration: `none`,
              fontSize: 2,
              fontWeight: `bold`,
              color: `inherit`,
            }}
          >
            UILanding
          </Link>
        </div>
        <div>
          <a
            href="https://instagram.com/ui_landing"
            sx={{
              ml: 3,
              textDecoration: `none`,
              fontSize: 3,
              fontWeight: `bold`,
              color: `inherit`,
            }}
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com/ui_landing"
            sx={{
              ml: 3,
              textDecoration: `none`,
              fontSize: 3,
              fontWeight: `bold`,
              color: `inherit`,
            }}
          >
            <FaInstagram />
          </a>
        </div>
      </Container>
    </header>
  )
}
