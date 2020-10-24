import express from "express";
import { Request, Response, Router } from 'express';

const router: express.Router = express.Router();

router.get("/", (req: Request, res: Response) => {
    res.json({
        status: "Test Message"
    });
});

export const appRouter = router;