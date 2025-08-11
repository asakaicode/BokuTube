import { GraphQLResolveInfo } from 'graphql'

interface CreateUploadUrlArgs {
  filename: string
  contentType: string
}

interface PresignedPayload {
  url: string
  key: string
  expiresAt: Date
}

export default async function createUploadUrl(
  _parent: unknown,
  input: CreateUploadUrlArgs,
  _context: unknown,
  _info: GraphQLResolveInfo,
): Promise<PresignedPayload> {
  // Simulate creating an upload URL
  await new Promise((resolve) => setTimeout(resolve, 100))

  return {
    url: `http://example.com/upload/${input.filename}`,
    key: input.filename,
    expiresAt: new Date(Date.now() + 3600 * 1000), // 1 hour from now
  }
}
