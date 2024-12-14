import { TacademicSemesterCode } from "./academicSemester.interface";
import { AcademicSemester } from "./academicSemester.model";

const  createAcademicSemesterIntoDB=async (payload:TacademicSemesterCode)=>{

const result=await AcademicSemester.create(payload)
return result;

}


export const academicSemesterService={
            createAcademicSemesterIntoDB
}