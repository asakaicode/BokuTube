import gql from 'graphql-tag'
import { Video } from '~/models/video'
import { useGraphQLQuery } from '~/utils/graphql'

const VIDEO_QUERY = gql`
  query Query {
    videos {
      id
      title
      description
      durationSec
      playbackUrl
      thumbnailUrl
      createdAt
      visibility
    }
  }
`

export const useVideos = () => {
  const { data } = useGraphQLQuery<{ videos: Video[] }>(VIDEO_QUERY, {})

  return data?.videos ?? []
}
