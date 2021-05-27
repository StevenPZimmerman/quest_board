const express = require("express");
const {
  getAll,
  getActiveQuests,
  getCharacterStats,
  getCharacterShop,
  getCharacterNames,
} = require("../db/queries/get");
const {
  makeQuestActive,
  makeQuestInactive,
  makeAllQuestsActive,
  makeAllQuestsInactive,
  purchaseItem,
  purchaseItemCost,
  removeArmor,
   removeWeapon,
   equipItem
} = require("../db/queries/update");

const router = express.Router();

router.get("/quests", async (req, res, next) => {
  try {
    let data = await getActiveQuests();
    res.json(data);
  } catch (error) {
    next(error);
  }
});
router.get("/quests/:id", async (req, res, next) => {
  try {
    let data = await getOneQuest();
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.get("/stats", async (req, res, next) => {
  try {
    let data = await getCharacterStats();
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.get("/shop", async (req, res, next) => {
  try {
    let data = await getCharacterShop();
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.get("/characters", async (req, res, next) => {
  try {
    let data = await getCharacterNames();
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.get("/questActive", async (req, res, next) => {
  try {
    let data = await makeQuestActive();
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.get("/questInactive", async (req, res, next) => {
  try {
    let data = await makeQuestInactive();
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.get("/allQuestsActive", async (req, res, next) => {
   try {
     let data = await makeAllQuestsActive();
     res.json(data);
   } catch (error) {
     next(error);
   }
 });

 router.get("/allQuestsInactive", async (req, res, next) => {
   try {
     let data = await makeAllQuestsInactive();
     res.json(data);
   } catch (error) {
     next(error);
   }
 });
 
 router.get("/purchaseItem/:ID", async (req, res, next) => {
   try {
      let {ID} = req.params;
     let data = await purchaseItem(ID);
     res.json(data);
   } catch (error) {
     next(error);
   }
 });

 router.get("/purchaseItemCost/:Price", async (req, res, next) => {
   try {
      let {Price} = req.params;
     let data = await purchaseItemCost(Price);
     res.json(data);
   } catch (error) {
     next(error);
   }
 });

 router.get("/removeArmor", async (req, res, next) => {
   try {
     let data = await removeArmor();
     res.json(data);
   } catch (error) {
     next(error);
   }
 });

 router.get("/removeWeapon", async (req, res, next) => {
   try {
     let data = await removeWeapon();
     res.json(data);
   } catch (error) {
     next(error);
   }
 });

 router.get("/equipItem/:ID", async (req, res, next) => {
   try {
      let {ID} = req.params;
     let data = await equipItem(ID);
     res.json(data);
   } catch (error) {
     next(error);
   }
 });

 
  






export default router;
