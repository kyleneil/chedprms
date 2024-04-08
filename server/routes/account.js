import  express  from "express";
import { DeleteAdminAccount, accounts, insertAdminAccount } from "../controllers/account.js";

const router = express.Router()

router.get("/account", accounts )
router.post("/insertAdmin", insertAdminAccount)
router.post("/deleteAccount", DeleteAdminAccount)

export default router