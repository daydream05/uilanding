/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)

exports.createResolvers = ({ createResolvers }) => {
  createResolvers({
    SanityShot: {
      path: {
        type: 'String',
        resolve(source, args, context, info) {
          const { slug, shortID } = source

          if(!slug) {
            return `/shot/${shortID}`
          }

          return `/shot/${slug.current}-${shortID}/`
        },
      },
    },
  })
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  

  const loadShots = async () => {
    const result = await graphql(
      `
        {
          allSanityShot {
            edges {
              node {
                path
                id
                title
              }
            }
          }
        }
      `
    )

    const shots = result.data.allSanityShot.edges

    console.log(shots)

    shots.forEach(({ node }, index) => {
      const previous = index === shots.length - 1 ? null : shots[index + 1].node
      const next = index === 0 ? null : shots[index - 1].node

      createPage({
        path: node.path,
        component: path.resolve(`./src/templates/shot-template.js`),
        context: {
          id: node.id,
          previous,
          next
        }
      })
    })
  }



  return Promise.all([loadShots()])
}