const typeDefs = `
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

  type PresignedPayload {
    url: String!
    key: String!
    expiresAt: DateTime!
  }

  type Query {
    video(id: ID!): Video
    videos: [Video]
  }

  type Mutation {
    createUploadUrl(filename: String!, contentType: String!): PresignedPayload!
    finalizeUploadVideo(key: String!, title: String!): Video!
  }
`

export default typeDefs
