import { GraphQLResolveInfo } from 'graphql'
import { mockFetchVideo, Video } from '~/models/video.js'

interface VideoArgs {
  id: string
}

export default async function video(
  _parent: unknown,
  input: VideoArgs,
  _context: unknown,
  _info: GraphQLResolveInfo,
): Promise<Video | null> {
  return await mockFetchVideo(input.id)
}
