const typeDefs = `
  type Video {
    id: ID!
    title: String!
    description: String!
    durationSec: Int!
    playbackUrl: String!
    thumbnailUrl: String!
    createdAt: Date!
    visibility: String!
  }

  type Query {
    videos: [Video]
  }
`

export default typeDefs
