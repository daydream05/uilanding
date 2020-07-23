import React from "react";
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import { HeroBasic } from "../components/hero-basic"

const IndexPage = ({ data }) => {

  return (
    <Layout>
      <SEO title="Home" />
      <HeroBasic />
    </Layout>
  )
}

export const indexQuery = graphql`
  query {
    allSanityShot {
    edges {
      node {
        title
        mainImage {
          asset {
            _ref
          }
        }
      }
    }
  }
  }
`

export default IndexPage
