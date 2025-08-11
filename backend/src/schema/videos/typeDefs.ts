const typeDefs = `
  scalar DateTime

  type Video {
    id: ID!
    title: String!
    description: String!
    durationSec: Int!
    playbackUrl: String!
    thumbnailUrl: String!
    createdAt: DateTime!
    visibility: String!
  }

  type Query {
    videos: [Video]
  }
`

export default typeDefs
