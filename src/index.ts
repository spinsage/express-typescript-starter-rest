import express from "express";
import cors from "cors";
import { appRouter } from "./routes";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 3001;

const app: express.Application = express();
app.disable("x-powered-by");

app.use(express.json());
app.use(cors());
app.use("/", appRouter);

app.listen(Number(port), '0.0.0.0', () => {
    console.log("server started at http://localhost: %s", port);
});