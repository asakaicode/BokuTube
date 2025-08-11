import { Video } from '~/models/video.js'

export default async function videos(): Promise<Video[]> {
  // Simulate a database call
  await new Promise((resolve) => setTimeout(resolve, 100))

  return [
    {
      id: '1',
      title: '1984',
      description: 'Dystopian novel',
      durationSec: 3600,
      playbackUrl: 'http://example.com/1984',
      thumbnailUrl: 'http://example.com/1984.jpg',
      createdAt: new Date(),
      visibility: 'public',
    },
    {
      id: '2',
      title: 'To Kill a Mockingbird',
      description: 'Novel about racial injustice',
      durationSec: 4200,
      playbackUrl: 'http://example.com/to-kill-a-mockingbird',
      thumbnailUrl: 'http://example.com/to-kill-a-mockingbird.jpg',
      createdAt: new Date(),
      visibility: 'public',
    },
    {
      id: '3',
      title: 'The Great Gatsby',
      description: 'Novel set in the Jazz Age',
      durationSec: 3600,
      playbackUrl: 'http://example.com/the-great-gatsby',
      thumbnailUrl: 'http://example.com/the-great-gatsby.jpg',
      createdAt: new Date(),
      visibility: 'public',
    },
  ]
}
