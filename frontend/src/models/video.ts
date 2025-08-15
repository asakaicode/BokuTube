export interface Video {
  id: string
  title: string
  description: string
  durationSec: number
  playbackUrl: string
  thumbnailUrl: string
  createdAt: Date
  visibility: string
}
