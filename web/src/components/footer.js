import React from 'react'

/** @jsx jsx */
import { Container, jsx } from "theme-ui"
import { mediaQueries } from '../gatsby-plugin-theme-ui/tokens'

export const Footer = (props) => {
  return (
    <footer
      sx={{
        my: 6,
        minHeight: `300px`,
        bg: `white`,
        position: `relative`,
        overflow: `hidden`,
      }}
      className={props.className}
    >
      <Container
        sx={{
          display: `flex`,
          justifyContent: `center`,
          alignItems: `center`,
          height: `100%`,
        }}
      >
        <div
          sx={{
            position: `absolute`,
            right: 5,
            top: 5,
          }}
        >
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
            position: `absolute`,
            bottom: 5,
            fontWeight: `bold`,
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
            position: `absolute`,
            bottom: 0,
            right: 5,
          }}
        >
          A big thank you to Omar Bourhaouta for his{' '}
          <a href="https://shooot.bourhaouta.com/" target="_blank" rel="noopener noreferrer">
            shooot
          </a>{' '}
          project which generated these shots.
        </div>
      </Container>
    </footer>
  )
}