const express = require("express");
const {getAll, getActiveQuests, getCharacterStats, getCharacterShop} = require("../db/queries/get")

const router = express.Router();

router.get("/quests", async (req, res, next) => {
   try{
let data = await getActiveQuests();
res.json(data);
   }catch (error) {
next(error);
   }
});

router.get("/stats", async (req, res, next) => {
   try{
let data = await getCharacterStats();
res.json(data);
   }catch (error) {
next(error);
   }
});

router.get("/shop", async (req, res, next) => {
   try{
let data = await getCharacterShop();
res.json(data);
   }catch (error) {
next(error);
   }
});


export default router;