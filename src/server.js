// import dotenv from "dotenv";
// import path from "path";
// dotenv.config({ path: path.resolve(__dirname, ".env") });

// import { GraphQLServer } from "graphql-yoga";
// import logger from "morgan";
// import schema from "./schema";
// import { sendSecretMail } from "./utils";
// try {
//   // sendSecretMail("xogh504@gmail.com", "123");
//   console.log("success");
// } catch (error) {
//   console.log(error);
// }

// const PORT = process.env.PORT || 4000;
// const server = new GraphQLServer({ schema });
// //보낼때마다 logger를 통하게 되서 계속 dev를 뛰워줌
// server.express.use(logger("dev"));

// server.start({ port: PORT }, () =>
//   console.log(`Server running on  http://localhost:${PORT}`)
// );



import "./env";
import { GraphQLServer } from "graphql-yoga";
import logger from "morgan";
import schema from "./schema";
import "./passport";
import { authenticateJwt } from "./passport";
import { isAuthenticated } from "./middlewares";

const PORT = process.env.PORT || 4000;

const server = new GraphQLServer({
  schema,
  context: ({ request }) => ({ request, isAuthenticated })
});

server.express.use(logger("dev"));
server.express.use(authenticateJwt);

server.start({ port: PORT }, () =>
  console.log(`✅ Server running on http://localhost:${PORT}`)
);