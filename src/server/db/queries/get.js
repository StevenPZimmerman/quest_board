import Query from "../models";

const getAll = async () => {
    return Query("SELECT * FROM quests");
};

const getOne = async (ID) => {
    return Query("SELECT * FROM quests WHERE idquests = ?", [ID])
};

const getActiveQuests = async () => {
    return Query("SELECT * FROM quests WHERE Active = 1");
};

const getInactiveQuests = async () => {
    return Query("SELECT * FROM quests WHERE Active = 0");
};

const getCharacterStats = async () => {
    return Query("SELECT * FROM family WHERE active = 1")
}

const getCharacterShop = async () => {
    return Query("SELECT * FROM neal_family_inventory")
}

const getCharacterNames = async () => {
    return Query("SELECT CharacterName FROM family")
}

const makeQuestActive = async () => {
    return Query("UPDATE Quests SET Active = 1 WHERE QuestID = ?", [ID])
};

const makeQuestInactive = async () => {
    return Query("UPDATE Quests SET Active = 0 WHERE QuestID = ?", [ID])
};



const example = async () => {
    return Query("UPDATE something FROM table WHERE something; UPDATE something FROM sametable WHERE something else")
}



export {
    getAll,
    getOne,
   getActiveQuests,
   getInactiveQuests,
   getCharacterStats,
   getCharacterShop,
   getCharacterNames,
   makeQuestActive,
   makeQuestInactive,
}