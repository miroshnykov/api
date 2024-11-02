import { DataSource } from "typeorm";
import { User } from "../entity/User";
import * as dotenv from "dotenv";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || "3013"),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: false,
  logging: true,
  entities: [User],
  subscribers: [],
  migrations: [],
  charset: "utf8mb4",
  connectTimeout: 60000
});