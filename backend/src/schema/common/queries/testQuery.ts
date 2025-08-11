export default async function testQuery() {
  await new Promise((resolve) => setTimeout(resolve, 100))

  return {
    message: 'Test query successful',
  }
}
