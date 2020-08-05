import React, { useState, useCallback } from 'react'
import { graphql } from 'gatsby'

/** @jsx jsx */
import { jsx } from "theme-ui"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { HeroBasic } from "../components/hero-basic"
import { Gallery } from "../components/gallery";
import { Helmet } from 'react-helmet'

const IndexPage = ({ data }) => {
  const { allSanityShot, site } = data

  const photos = allSanityShot?.edges?.map(({ node }) => {
    return {
      alt: node?.mainImage?.alt,
      title: node?.title,
      src: node?.mainImage?.asset?.url,
      fluid: node?.mainImage?.asset?.fluid,
      downloadUrl: node?.mainImage?.asset?.url,
      width: node?.mainImage?.asset?.metadata?.dimensions?.width,
      height: node?.mainImage?.asset?.metadata?.dimensions?.height,
      pageUrl: node?.path
    }
  })

  return (
    <Layout>
      <SEO
        title="Home"
      />
      <Helmet>
        <meta property="og:title">UI Landing</meta>
      </Helmet>
      <HeroBasic />
      <Gallery photos={photos} />
    </Layout>
  )
}

export const indexQuery = graphql`
  query {
    allSanityShot {
      edges {
        node {
          title
          path
          mainImage {
            alt
            asset {
              url
              metadata {
                dimensions {
                  width
                  height
                }
              }
              fluid(maxWidth: 1500) {
                ...GatsbySanityImageFluid_noBase64
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
