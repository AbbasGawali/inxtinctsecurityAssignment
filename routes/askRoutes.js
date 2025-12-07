import express from "express";
import { processAskQuery } from "../controller/askController.js";
const router = express();

router.post("/ask", processAskQuery);


export default router;