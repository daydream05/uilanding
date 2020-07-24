import React, { useState, useCallback } from 'react'
import { graphql } from 'gatsby'
import Carousel, { Modal, ModalGateway } from 'react-images'

/** @jsx jsx */
import { jsx } from "theme-ui"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { HeroBasic } from "../components/hero-basic"
import { Gallery } from "../components/gallery";

const IndexPage = ({ data }) => {
  const { allSanityShot } = data

  const [currentImage, setCurrentImage] = useState(0)
  const [viewerIsOpen, setViewerIsOpen] = useState(false)

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index)
    setViewerIsOpen(true)
  }, [])

  const closeLightbox = () => {
    setCurrentImage(0)
    setViewerIsOpen(false)
  }

  const photos = allSanityShot?.edges?.map(({ node }) => {
    return {
      alt: node?.mainImage?.alt,
      title: node?.title,
      src: node?.mainImage?.asset?.url,
      fluid: node?.mainImage?.asset?.fluid,
      downloadUrl: node?.mainImage?.asset?.url,
      width: node?.mainImage?.asset?.metadata?.dimensions?.width,
      height: node?.mainImage?.asset?.metadata?.dimensions?.height,
    }
  })

  return (
    <Layout>
      <SEO title="Home" />
      <HeroBasic />
      <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map((x) => ({
                caption: x.alt,
                source: {
                  download: x.downloadUrl,
                  regular: x.fluid.src,
                },
              }))}
              styles={{
                view: (base) => ({
                  ...base,
                  height: `80vh`,
                  display: `flex `,
                }),
              }}
            />
          </Modal>
        ) : null}
      </ModalGateway>
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
