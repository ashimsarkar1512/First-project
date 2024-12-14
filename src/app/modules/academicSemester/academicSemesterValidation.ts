import {  z } from "zod";
import { academicSemesterCode, academicSemesterName, Months } from "./acadmicSemester.constant";

const createAcademicSemesterValidationSchema=z.object({
            body:z.object({
                        name:z.enum([...academicSemesterName]as [string,...string[]]),
                        year:z.date(),
                        code:z.enum([...academicSemesterCode]as [string,...string[]]),
                        sartMonth:z.enum([...Months] as [string,...string[]]),
                        endMonth:z.enum([...Months]as [string,...string[]])
            })
})


export const academicSemesterValidation={
            createAcademicSemesterValidationSchema
}


