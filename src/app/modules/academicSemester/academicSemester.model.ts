import {  model, Schema } from 'mongoose';

import { TAcademicSemester } from './academicSemester.interface';
import { academicSemesterCode, academicSemesterName, Months } from './acadmicSemester.constant';



 
const academicSemesterSchema =new Schema<TAcademicSemester>(
{  name:{
            type:String,
            required:true,
            enum:academicSemesterName
},
year:{
            type:Date,
            required:true,
            enum:academicSemesterCode
},

code:{
            type:String,
            enum:['student','faculty','admin']
},
sartMonth:{
            type:String,
            required:true,
            enum:Months
},

endMonth:{
            type:String,
            required:true,
            enum:Months
}

},{
            timestamps:true,
})


export const  AcademicSemester=model<TAcademicSemester>(
            'AcademicSemester',
            academicSemesterSchema
)