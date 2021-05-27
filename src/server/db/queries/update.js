import Query from "../models";



const makeAllQuestsActive = async () => {
    return Query("UPDATE Quests SET Active = 1 WHERE Active = 0 ")
};

const makeAllQuestsInactive = async () => {
    return Query("UPDATE Quests SET Active = 0 WHERE Active = 1 ")
};

const makeQuestActive = async (ID) => {
    return Query("UPDATE Quests SET Active = 1 WHERE QuestID = ?", [ID])
};

const makeQuestInactive = async (ID) => {
    return Query("UPDATE Quests SET Active = 0 WHERE QuestID = ?", [ID])
};

const purchaseItem = async (ID) => {
    return Query("UPDATE neal_family_inventory SET Equipped = 1 WHERE InventoryID = ?", [ID])
};

const purchaseItemCost = async (Price) => {
    return Query("UPDATE family SET Currency = Currency - ? WHERE Active = 1", [Price])
};

const removeArmor = async () => {
    return Query ("Update neal_family_inventory SET Equipped = 1 WHERE Equipped = 2 AND Type = 'Armor'")
}

const removeWeapon = async () => {
    return Query ("Update neal_family_inventory SET Equipped = 1 WHERE Equipped = 2 AND Type = 'Weapon'")
}

const equipItem = async(ID) => {
    return Query ("Update neal_family_inventory Set Equipped = 2 WHERE InventoryID = ?", [ID])
}





export {
    makeAllQuestsActive,
    makeAllQuestsInactive,
   makeQuestActive,
   makeQuestInactive,
   purchaseItem,
   purchaseItemCost,
   removeArmor,
   removeWeapon,
   equipItem
}