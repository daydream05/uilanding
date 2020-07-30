import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { FiExternalLink } from 'react-icons/fi'

/** @jsx jsx */
import { jsx, Container } from "theme-ui"

import Layout from '../components/layout'
import { mediaQueries, constants, breakpoints } from '../gatsby-plugin-theme-ui/tokens'
import { Header } from '../components/header'

const ShotTemplate = ({ data }) => {
  const { shot } = data

  return (
    <>
      <Header />
      <main
        sx={{
          height: `calc(100vh - ${constants.headerHeight} - 128px)`,
        }}
      >
        <section
          sx={{
            px: 4,
            height: `100%`,
            display: `flex`,
            flexDirection: `column`,
            justifyContent: `center`,
          }}
        >
          <Container
            sx={{
              maxWidth: breakpoints.xl,
              display: `flex`,
              flexDirection: `column`,
              alignItems: `center`,
            }}
          >
            <div
              sx={{
                display: `flex`,
                flexDirection: `column`,
                alignItems: `center`,
                maxWidth: `600px`,
                width: `100%`,
              }}
            >
              <div
                sx={{
                  display: `flex`,
                  width: `100%`,
                  mb: 3,
                }}
              >
                <h1
                  sx={{
                    fontSize: 5,
                    m: 0,
                    width: `100%`,
                    lineHeight: 1,
                    [mediaQueries.lg]: {
                      fontSize: 7,
                    },
                  }}
                >
                  {shot.title}
                </h1>
                <a
                  sx={{ color: `inherit` }}
                  href={shot.siteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiExternalLink
                    sx={{
                      fontSize: 4,
                    }}
                  />
                </a>
              </div>
              {shot?.mainImage?.asset && (
                <Img
                  fluid={shot?.mainImage?.asset?.fluid}
                  alt={shot?.mainImage?.alt}
                  sx={{
                    width: `100%`,
                  }}
                />
              )}
            </div>
          </Container>
        </section>
      </main>
      <footer
        sx={{
          height: `128px`,
          px: 4,
          display: `flex`,
          flexDirection: `column`,
          alignItems: `flex-end`,
          [mediaQueries.lg]: {
            px: 5,
          },
        }}
      >
        <p
          sx={{
            fontSize: 4,
            fontWeight: `bold`,
            m: 0,
          }}
        >
          UILanding
        </p>
        <div>
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
      </footer>
    </>
  )
}

export default ShotTemplate


export const query = graphql`
  query ShotTemplateQuery($id: String!) {
    shot: sanityShot(id: { eq: $id }) {
      title
      path
      siteUrl
      mainImage {
        alt
        asset {
          fluid(maxWidth: 1500) {
            ...GatsbySanityImageFluid_noBase64
          }
        }
      } 
    }
  }
`