import express from 'express';
import { academicSemesterControllers } from './academicSemester.controller';
import { academicSemesterValidation } from './academicSemesterValidation';
import validateRequest from '../../middlewares/validateRequest';


const router = express.Router();

router.post('/create-academic-semester',validateRequest(academicSemesterValidation.createAcademicSemesterValidationSchema,), academicSemesterControllers.createAcademicSemester )

// router.get('/', studentController.getAllStudent);
// router.get('/:studentId', studentController.getSingleStudent);
// router.delete('/:studentId', studentController.deleteStudent);

export const academicSemesterRoutes = router;
