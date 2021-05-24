const express = require("express");
const {getAll} = require("../db/queries/get")

const router = express.Router();

router.get("/quests", async (req, res, next) => {
   try{
let data = await getAll();
res.json(data);
   }catch (error) {
next(error);
   }
});

export default router;