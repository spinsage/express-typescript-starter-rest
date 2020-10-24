import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        status: "Test Message"
    });
});

export const appRouter = router;