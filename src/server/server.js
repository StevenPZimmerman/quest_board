import express from "express";
import morgan from "morgan";
import{ join }from "path";
import router from "./routes";

const app = express();
    
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static("public")); 

app.use(router);


app.use("*", (req, res, next) => {
  try {
    res.sendFile(join(__dirname, "../public/index.html"));
  } catch (error) {
    next(error);
  }
});

app.use((req, res, next) => {
  try {
    res.status(404).json("Not Found");
  } catch (error) {
    next(error);
  }
});

app.use((err, req, res, next) => {
  console.log(err.message);
  res.status(500).json({ error: err.message, msg: "Something went wrong :(" });
});

const port = 3001;

app.listen(port, () => console.log('Server listening on port 3001...'));