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

export {
    getAll,
    getOne,
   getActiveQuests,
}