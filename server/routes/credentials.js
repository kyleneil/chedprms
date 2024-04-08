import express from "express";
import { credentials, logout } from "../controllers/credentials.js";

const router = express.Router()

router.post("/login", credentials)
router.get("/logout", logout)

export default router