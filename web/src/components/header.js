import React from "react"
import { Link } from "gatsby"

/** @jsx jsx */
import { Container, jsx } from "theme-ui"

import { constants } from '../gatsby-plugin-theme-ui/tokens'

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
          <Link
            to="/"
            sx={{
              textDecoration: `none`,
              fontSize: 2,
              fontWeight: `bold`,
              color: `inherit`,
            }}
          >
            About
          </Link>
          <Link
            to="/"
            sx={{
              ml: 4,
              textDecoration: `none`,
              fontSize: 2,
              fontWeight: `bold`,
              color: `inherit`,
            }}
          >
            Suggest a photo
          </Link>
        </div>
      </Container>
    </header>
  );
}
