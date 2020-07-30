import React from 'react'

/** @jsx jsx */
import { Container, jsx } from "theme-ui"
import { mediaQueries, constants } from '../gatsby-plugin-theme-ui/tokens'

export const Footer = (props) => {
  return (
    <footer
      sx={{
        py: 6,
        minHeight: constants.footerHeight,
        bg: `white`,
        position: `relative`,
        overflow: `hidden`,
        px: 4,
      }}
      className={props.className}
    >
      <Container
        sx={{
          display: `flex`,
          flexDirection: `column`,
          height: `100%`,
          [mediaQueries.lg]: {
            alignItems: `flex-end`,
          },
        }}
      >
        <div>
          <span
            sx={{
              display: `block`,
              color: `black`,
              lineHeight: 0.9,
              fontWeight: `bold`,
              fontSize: 5,
              [mediaQueries.lg]: {
                fontSize: `128px`,
              },
            }}
          >
            UILanding
          </span>
        </div>
        <div
          sx={{
            color: `black`,
            zIndex: 1,
            bottom: 5,
            fontWeight: `bold`,
            mb: 3,
            [mediaQueries.lg]: {
              fontSize: `128px`,
              fontSize: 5,
              right: 5,
            },
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a
            href="https://www.gatsbyjs.org"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: `inherit`,
            }}
          >
            Gatsby
          </a>
          ,{` & `}
          <a
            href="https://www.sanity.io"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: `inherit`,
            }}
          >
            Sanity
          </a>
          .
        </div>
        <div
          sx={{
            lineHeight: 1.2,
          }}
        >
          A big thank you to{' '}
          <a
            href="https://twitter.com/bourhaouta?lang=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            @bourhaouta
          </a>{' '}
          for his{' '}
          <a href="https://shooot.bourhaouta.com/" target="_blank" rel="noopener noreferrer">
            shooot
          </a>{' '}
          project which generated these shots.
        </div>
      </Container>
    </footer>
  )
}