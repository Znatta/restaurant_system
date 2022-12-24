import app from "./app";
require("dotenv").config();

const port = process.env.PORT;
const server = app.listen(port);

server.on("listening", () => console.log(`Server running on port ${port}.`));
