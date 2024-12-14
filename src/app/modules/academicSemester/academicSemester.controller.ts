import sendResponse from "../../utils/sendResponse";
import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import { academicSemesterService } from "./academicSemester.service";


const createAcademicSemester =catchAsync(async (req, res) => {

//    const { password, student:studentData } = req.body;

    const result = await academicSemesterService.createAcademicSemesterIntoDB(req.body);



    sendResponse(res,{
   statusCode:StatusCodes.OK,
   success:true,
   message:" AcademicSemester is created successfully",
   data:result,

    })
 
}
); 
        export  const academicSemesterControllers={
            createAcademicSemester
          }