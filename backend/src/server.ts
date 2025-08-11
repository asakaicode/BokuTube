import { ApolloServer } from '@apollo/server'
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default'
import { startStandaloneServer } from '@apollo/server/standalone'
import apolloConfig from '~/schema/index.js'

const PORT = 4000

const runServer = async () => {
  const server = new ApolloServer({
    ...apolloConfig,
    plugins: [ApolloServerPluginLandingPageLocalDefault()],
  })
  const { url } = await startStandaloneServer(server, {
    listen: { port: PORT },
  })

  console.log(`🚀  Server ready at: ${url}`)
}

export default runServer
