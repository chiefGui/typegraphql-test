import "reflect-metadata"
import cors from "micro-cors"
import { send } from "micro"
import { ApolloServer } from "apollo-server-micro"
import { buildSchema } from "type-graphql"
import { NextApiRequest, NextApiResponse } from "next"

import { TodoResolver } from "./todo/resolver"

async function createServer(): Promise<ApolloServer> {
  const schema = await buildSchema({
    resolvers: [TodoResolver],
  })

  return new ApolloServer({
    schema,
    introspection: true,
  })
}

export const config = {
  api: {
    bodyParser: false,
  },
}

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const server = await createServer()

  await server.start()

  return cors()((req, res) =>
    req.method === "OPTIONS"
      ? send(res, 200, "ok")
      : server.createHandler({ path: "/api/graphql" })(req, res)
  )(req, res)
}
