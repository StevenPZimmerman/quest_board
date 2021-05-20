import express from "express";

const router = express.Router();

router.get("/api/test", (req, res, next) => {
    res.json({msg: "App is working on the server endpoint."});
});

export default router;