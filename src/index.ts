import "reflect-metadata";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { buildSchema } from "type-graphql";
import { UserResolver } from "./resolvers/UserResolver";
import { AppDataSource } from "./config/database";
import * as dotenv from "dotenv";

dotenv.config();

console.log("Starting application...");

AppDataSource.initialize()
  .then(async () => {
    console.log("Database connection initialized successfully");

    const schema = await buildSchema({
      resolvers: [UserResolver],
    }).catch(error => {
      console.error("Error building schema:", error);
      throw error;
    });

    console.log("GraphQL schema built successfully");

    const server = new ApolloServer({
      schema,
    });

    console.log("Apollo server created");

    const { url } = await startStandaloneServer(server, {
      listen: { port: parseInt(process.env.SERVER_PORT || "4000") },
    });

    console.log(`🚀 Server ready at ${url}`);
  })
  .catch((error) => {
    console.error("Error during Data Source initialization:", error);
    process.exit(1);
  }); 