const express = require("express");
const morgan = require("morgan");
const{ join }= require("path");
const {router} = require ("../server/db/routes");


const app = express();
    
app.use(express.json());
app.use(morgan("dev"));
app.use(router);

// app.use("/api/v1", apiRouter);
// app.use(express.static("public")); 


// app.use("*", (req, res, next) => {
//     try {
//       res.sendFile(join(__dirname, "../public/index.html"));
//     } catch (error) {
//       next(error);
//     }
//   });

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