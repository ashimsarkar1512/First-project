import { studentService } from './student.service';
import catchAsync from '../../utils/catchAsync';



const getAllStudent = catchAsync(async (req, res) => {

    const result = await studentService.getallStudentFromDB();
    res.status(200).json({
      success: true,
      message: 'Student are retrieved successfully',
      data: result,
    });
 
});

const getSingleStudent = catchAsync(
  async (req, res) => {
    
      const { studentId } = req.params;
      const result = await studentService.getSingleStudentFromDB(studentId);
      res.status(200).json({
        success: true,
        message: 'student id retrieved successfully',
        data: result,
      });
    
  }
);
const deleteStudent =catchAsync (
  async (req, res) => {

      const { studentId } = req.params;
      const result = await studentService.deleteStudentFromDB(studentId);
      res.status(200).json({
        success: true,
        message: 'student id deleted successfully',
        data: result,
      });
   
  }
);

export const studentController = {

  getAllStudent,
  getSingleStudent,
  deleteStudent,
};
