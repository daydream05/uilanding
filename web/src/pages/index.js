import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import { HeroBasic } from "../components/hero-basic"
import { CollectionGrid } from "../components/collection-grid"
import { Gallery } from '../components/gallery'

const IndexPage = ({ data }) => {
  const { allUnsplashPhoto, allUnsplashCollection } = data

  const collections = allUnsplashCollection.edges.map(({ node }) => {
    return {
      ...node
    }
  })

  const collectionObject = collections.reduce((acc, curr) => {
    acc[curr.collection_id] = curr

    return acc
  }, {})

  const generateFileName = (node) => {
    return `${node.user.first_name}-${node.user.last_name}-${node.id}-unsplash`
  }

  const generateDownloadUrl = (node) => {
    return `https://unsplash.com/photos/${node.id}/download?force=true`
  }

  const photos = allUnsplashPhoto.edges.map(({ node }) => {
    return {
      src: node.urls.small,
      alt: node.alt_description,
      width: node.width,
      height: node.height,
      full: node.urls.full,
      fileName: generateFileName(node),
      downloadUrl: generateDownloadUrl(node),
      collectionTitle: collectionObject[node.collection_id] && collectionObject[node.collection_id].title,
    }
  })

  return (
    <Layout>
      <SEO title="Home" />
      <HeroBasic />
      <CollectionGrid collections={collections} />
      <Gallery photos={photos} />
    </Layout>
  )
}

export const indexQuery = graphql`
  query {
    allUnsplashPhoto(sort: {fields: likes, order: DESC}) {
      edges {
        node {
          id
          collection_id
          alt_description
          user {
            first_name
            last_name
          }
          urls {
            raw
            full
            regular
            small
            thumb
          }
          width
          height
        }
      }
    }
    allUnsplashCollection {
      edges {
        node {
          id
          title
          collection_id
          cover_photo {
            color
            urls {
              small
            }
          }
        }
      }
    }
  }
`

export default IndexPage
