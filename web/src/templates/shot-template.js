import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

/** @jsx jsx */
import { jsx, Container } from "theme-ui"

import Layout from '../components/layout'
import { mediaQueries, constants, breakpoints } from '../gatsby-plugin-theme-ui/tokens'

const ShotTemplate = ({ data }) => {
  const { shot } = data

  return (
    <Layout>
      <section>
        <Container
          sx={{
            maxWidth: breakpoints.md,
          }}
        >
          <div
            sx={{
              display: `flex`,
              flexDirection: `column`,
              alignItems: `center`,
            }}
          >
            <h1
              sx={{
                fontSize: 7,
                mb: 0,
                width: `100%`,
                maxWidth: `600px`,
              }}
            >
              {shot.title}
            </h1>
            {shot?.mainImage?.asset && (
              <Img
                fluid={shot?.mainImage?.asset?.fluid}
                alt={shot?.mainImage?.alt}
                sx={{
                  maxHeight: `600px`,
                  maxWidth: `600px`,
                }}
              />
            )}
          </div>
        </Container>
      </section>
    </Layout>
  )
}

export default ShotTemplate

export const query = graphql`
  query ShotTemplateQuery($id: String!) {
    shot: sanityShot(id: { eq: $id }) {
      title
      path
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