import React from 'react'
import Img from 'gatsby-image'
import { MdArrowDownward } from 'react-icons/md'
import { Link } from 'gatsby'

/** @jsx jsx */
import { jsx } from "theme-ui"
import { breakpoints, mediaQueries } from '../gatsby-plugin-theme-ui/tokens'


export const Gallery = ({ photos, onClick }) => {
  return (
    <section
      sx={{
        minHeight: `50vh`,
        px: 4,
        [mediaQueries.lg]: {
          px: 6,
        }
      }}
    >
      <div
        sx={{
          maxWidth: breakpoints.xxl,
          margin: `0 auto`,
          py: 4,
          [mediaQueries.lg]: {
            py: 5,
          }
        }}
      >
        <div
          sx={{
            display: `grid`,
            gridGap: 3,
            [mediaQueries.lg]: {
              gridTemplateColumns: `1fr 1fr 1fr`,
            }
          }}
        >
          {photos &&
            photos.map((photo, id) => {
              return <Photo key={id} photo={photo} onClick={onClick} />
            })}
        </div>
      </div>
    </section>
  )
}

const Photo = ({ photo, onClick }) => {

  const handleClick = (event) => {
    onClick(event, { photo })
  }

  return (
    <figure
      sx={{
        cursor: `pointer`,
        position: `relative`,
        margin: 0,
        ':hover, :focus, :focus-within': {
          '.tag': {
            opacity: 1,
            visibility: `visible`,
            transition: `opacity .2s ease-in-out`,
          },
          '.download': {
            visibility: `visible`,
            opacity: 1,
          },
          '.button': {
            '::after': {
              transition: `opacity .2s ease-in-out`,
              opacity: 0.8,
              visibility: `visible`,
            },
          },
        },
      }}
    >
      <Link
        to={photo.pageUrl}
        className="button"
        sx={{
          padding: 0,
          border: `none`,
          width: `100%`,
          height: `100%`,
          cursor: `pointer`,
          '::after': {
            transition: `opacity .2s ease-in-out`,
            content: `""`,
            position: `absolute`,
            top: 0,
            left: 0,
            width: `100%`,
            height: `100%`,
            backgroundColor: `black`,
            opacity: 0,
          },
        }}
      >
        {photo?.fluid && (
          <Img
            fluid={photo.fluid}
            alt={photo.alt}
            onClick={handleClick}
            sx={{
              display: `block`,
              width: `100%`,
              height: `100%`,
            }}
          />
        )}
      </Link>
      <div
        className="download"
        sx={{
          position: `absolute`,
          width: `100%`,
          bottom: 3,
          right: 0,
          opacity: 0,
          zIndex: 2,
          transition: `opacity .2s ease-in-out,visibility .1s ease-in-out`,
          ':focus, :focus-within': {
            visibility: 'visible',
            opacity: 1,
            transition: `opacity .2s ease-in-out,visibility .1s ease-in-out`,
          },
        }}
      >
        <div
          sx={{
            display: `flex`,
            justifyContent: `space-between`,
            width: `100%`,
            px: 3,
          }}
        >
          <div sx={{ flex: 1, display: `flex` }}>
            <span
              sx={{
                color: `white`,
              }}
            >
              {photo.title}
            </span>
          </div>
          <a
            sx={{
              width: `32px`,
              height: `32px`,
              bg: `white`,
              display: `flex`,
              justifyContent: `center`,
              alignItems: `center`,
              borderRadius: `4px`,
              color: `darkGrey`,
              transition: `color .2s ease-in-out`,
              ':hover': {
                color: `inherit`,
                transition: `color .2s ease-in-out`,
              },
            }}
            title="Download photo"
            href={photo.downloadUrl}
            download
          >
            <MdArrowDownward />
          </a>
        </div>
      </div>
    </figure>
  )
}