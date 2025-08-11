import { GraphQLResolveInfo } from 'graphql'

interface TestMutationInput {
  message: string
}

export default async function testMutation(
  _parent: unknown,
  input: TestMutationInput,
  _context: unknown,
  _info: GraphQLResolveInfo,
): Promise<{ message: string }> {
  await new Promise((resolve) => setTimeout(resolve, 100))

  return {
    message: `Test mutation successful: ${input.message}`,
  }
}
