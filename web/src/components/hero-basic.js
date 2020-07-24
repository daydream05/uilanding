import React from 'react'
/** @jsx jsx */
import { Container, jsx } from 'theme-ui'
import { breakpoints, mediaQueries } from '../gatsby-plugin-theme-ui/tokens';

export const HeroBasic = () => {
  return (
    <section
      sx={{
        pt: 6,
        pb: 4,
      }}
    >
      <Container
        sx={{
          px: 4,
          [mediaQueries.lg]: {
            px: 6,
            maxWidth: breakpoints.lg,
          },
          [mediaQueries.xl]: {
            px: 0,
          }
        }}
      >
        <Container
          sx={{
            ml: 0,
            [mediaQueries.lg]: {
              maxWidth: `50%`,
            },
          }}
        >
          <h1
            sx={{
              fontSize: 6,
              lineHeight: 1,
              mt: 0,
              mb: 2,
            }}
          >
            Find your next inspiration.
          </h1>
          <div>
            <p
              sx={{
                fontSize: 3,
              }}
            >
              Landing page of your favorite websites as dribbble shots.
            </p>
          </div>
        </Container>
      </Container>
    </section>
  );
}