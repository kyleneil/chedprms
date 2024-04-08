import  express  from "express";
import { academicyears, aysem, heis, promo, semester, transcripts } from "../controllers/promo.js";

const router = express.Router()

router.get("/getHEI", heis )
router.get("/getAY", academicyears)
router.post("/getSemester", semester)
router.post("/getStudent", promo)
router.post("/getGrades", transcripts)
router.post("/getAYSem", aysem)
router.post("/getStudentSem", promo)

export default router