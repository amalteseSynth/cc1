import { Request, Response, NextFunction } from 'express';
import examinationService from '../services/examinations.service';

// return the full list
const getExaminations = async (req: Request, res: Response, next: NextFunction) => {
    console.log("getExaminations | getting full exam list");

    try{
        const examinations = examinationService.findAllExaminations();
        return res.status(200).send(examinations);
    } catch (e) {
        console.log("getExaminations | error: " + e.message);
        return res.status(500).json({ status: 500, message: "Internal server error" });
    }
};
    
// return all exams of a specific IDs
const getExamination = async (req: Request, res: Response, next: NextFunction) => {
    let id: number = +req.params.id;
    console.log("getExaminations | getting exam id: ", id);
    
    try{
        const examinations = examinationService.findExamination(id);
        return res.status(200).send(examinations);
    } catch (e) {
        console.log("getExamination | error: " + e.message);
        return res.status(500).json({ status: 500, message: "Internal server error" });
    }
};

// return data aggregated by of positive/pending/negative
const getExaminationsStats = async (req: Request, res: Response, next: NextFunction) => {
    console.log("getExaminationsStats | getting data aggregated by result");

    try{
        const examinations = examinationService.examinationsStats();
        return res.status(200).send(examinations);
    } catch (e) {
        console.log("getExaminationsStats | error: " + e.message);
        return res.status(500).json({ status: 500, message: "Internal server error" });
    }
};

export default { getExaminations, getExamination, getExaminationsStats };
