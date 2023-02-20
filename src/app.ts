import express from "express";
import { router } from "./routes/script.routes";

const app = express();

app.set("port", process.env.PORT || 3000);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);

export default app;
