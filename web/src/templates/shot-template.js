import React, { useEffect } from 'react'
import { graphql, Link, navigate } from 'gatsby'
import Img from 'gatsby-image'
import mousetrap from 'mousetrap'
import { FiExternalLink } from 'react-icons/fi'
import { FaLongArrowAltRight, FaLongArrowAltLeft } from 'react-icons/fa'

/** @jsx jsx */
import { jsx, Container } from "theme-ui"

import Layout from '../components/layout'
import { mediaQueries, constants, breakpoints } from '../gatsby-plugin-theme-ui/tokens'
import { Header } from '../components/header'

const ShotTemplate = ({ data }) => {
  const { shot, allSanityShot } = data

  const currentShot = allSanityShot.edges.find(({ node }) => node.id === shot?.id)

  const navigateToPrevShot = () => navigate(currentShot?.previous?.path)
  const navigateToNextShot = () => navigate(currentShot?.next?.path)

  useEffect(() => {
    mousetrap.bind(`left`, navigateToPrevShot)
    mousetrap.bind(`right`, navigateToNextShot)
    mousetrap.bind(`spacebar`, navigateToNextShot)

    return () => {
      mousetrap.unbind(`left`)
      mousetrap.unbind(`right`)
      mousetrap.unbind(`spacebar`)
    }
  }, [currentShot?.previous?.path, currentShot?.next?.path])


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
              position: `relative`,
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
            <aside
              sx={{
                display: `grid`,
                width: `100%`,
                gridGap: 3,
                mt: 4,
                gridTemplateColumns: `1fr 1fr`,
                [mediaQueries.lg]: {
                  position: `absolute`,
                  mt: 0,
                  top: `50%`,
                  fontSize: 4,
                  width: `100%`,
                  display: `grid`,
                  alignItems: `space-between`,
                },
              }}
            >
              {currentShot?.previous && (
                <div
                  sx={{
                    gridColumnStart: 1,
                    display: `flex`,
                    alignItems: `center`,
                  }}
                >
                  <Link
                    to={currentShot?.previous.path}
                    sx={{
                      color: `inherit`,
                      textDecoration: `none`,
                      display: `flex`,
                      alignItems: `center`,
                    }}
                  >
                    <FaLongArrowAltLeft sx={{ mr: 3 }} />
                    <span sx={{ fontSize: 3 }}>{currentShot?.previous.title}</span>
                  </Link>
                </div>
              )}
              {currentShot?.next && (
                <div
                  sx={{
                    gridColumnStart: 2,
                    justifySelf: `flex-end`,
                  }}
                >
                  <Link
                    to={currentShot?.next.path}
                    sx={{
                      color: `inherit`,
                      textDecoration: `none`,
                      display: `flex`,
                      alignItems: `center`,
                    }}
                  >
                    <span sx={{ mr: 3, fontSize: 3 }}>{currentShot?.next.title}</span>
                    <FaLongArrowAltRight />
                  </Link>
                </div>
              )}
            </aside>
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
      id
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
    allSanityShot(limit: 1000) {
      edges {
        node {
          id
        }
        next {
          title
          path
          mainImage {
            alt
            asset {
              fluid(maxWidth: 300) {
                ...GatsbySanityImageFluid_noBase64
              }
            }
          }
        }
        previous {
          title
          path
          mainImage {
            alt
            asset {
              fluid(maxWidth: 300) {
                ...GatsbySanityImageFluid_noBase64
              }
            }
          }
        }
      }
    }
  }
`