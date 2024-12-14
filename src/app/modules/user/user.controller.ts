import { UserServices } from "./user.service";
import sendResponse from "../../utils/sendResponse";
import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";


const createStudent =catchAsync(async (req, res) => {

   const { password, student:studentData } = req.body;

    const result = await UserServices.createStudentIntoDB(password,studentData);
    
    // res.status(200).json({
    //   success: true,
    //   message: 'Student created successfully',
    //   data: result,
    // });


    sendResponse(res,{
   statusCode:StatusCodes.OK,
   success:true,
   message:"Student created successfully",
   data:result,

    })
 
}
); 
        export  const userControllers={
            createStudent
          }