import Query from "../models";

const getAll = async () => {
    return Query("SELECT * FROM quests");
};

const getOne = async (id) => {
    return Query("SELECT * FROM quests WHERE idquests = ?", [id])
};

const getActiveQuests = async () => {
    return Query("SELECT * FROM quests WHERE Active = 1");
};

const getCharacterStats = async () => {
    return Query("SELECT * FROM family WHERE active = 1")
}

const getCharacterShop = async () => {
    return Query("SELECT * FROM neal_family_inventory")
}

const example = async () => {
    return Query("UPDATE something FROM table WHERE something; UPDATE something FROM sametable WHERE something else")
}






export {
    getAll,
    getOne,
   getActiveQuests,
   getCharacterStats,
   getCharacterShop,
}