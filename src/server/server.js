import express from "express";
import morgan from "morgan";
import apiRouter from "./routes";

const app = express();
    
app.use(express.json());
app.use(morgan("dev"));

app.use(express.static("public")); 

app.use(apiRouter);

const port = 3001;

app.listen(port, () => console.log('Server listening on port 3001...'));