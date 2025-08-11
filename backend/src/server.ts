import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from "@apollo/server/standalone"
import apolloConfig from "./schema"

const PORT = 4000

const runServer = async () => {
  const server = new ApolloServer(apolloConfig)
  const { url } = await startStandaloneServer(server, {
    listen: { port: PORT }
  })

  console.log(`🚀  Server ready at: ${url}`);
}

export default runServer