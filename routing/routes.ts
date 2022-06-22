import express from "express";
import examinationController from "../controllers/examinations.controller";

const router = express.Router();
router.get("/examinations", examinationController.getExaminations);
router.get("/examination/:id", examinationController.getExamination);
router.get("/examinations/stats", examinationController.getExaminationsStats);

export = router;
