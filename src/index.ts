import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { appRouter } from "./routes";

const port = process.env.PORT || 8080;

const app: express.Application = express();
app.disable("x-powered-by");

app.use(bodyParser.json());
app.use(cors());
app.use("/", appRouter);

app.listen(port, () => {
    console.log("server started at http://localhost: %s", port);
});