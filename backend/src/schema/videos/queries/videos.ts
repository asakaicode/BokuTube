import { mockFetchVideos, Video } from '~/models/video.js'

export default async function videos(): Promise<Video[]> {
  return await mockFetchVideos()
}
