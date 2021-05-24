const { Query } = require("../models");

const getAll = async () => {
    return Query("SELECT * FROM quests");
};

const getOne = async (id) => {
    return Query("SELECT * FROM employees WHERE idquests = ?", [id])
};

const getActiveQuests = async () => {
    return Query("SELECT * FROM quests WHERE Active = 1");
};

module.exports = {
    getAll,
    getOne,
   getActiveQuests,
}