const express = require("express");
const {getAll} = require("../queries/get")

const router = express.Router();

router.get("/quests", async (req, res, next) => {
   try{
let data = await getAll();
res.json(data);
   }catch (error) {
next(error);
   }
});

module.exports = {router};