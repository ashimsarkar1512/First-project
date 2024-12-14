import express, { NextFunction, Request, Response } from 'express';
import { userControllers } from './user.controller';
import { AnyZodObject } from 'zod';
import { StudentValidationSchema } from '../student/student.validation';

const router=express.Router()

const validateRequest=(schema:AnyZodObject)=>{
            return async(req:Request,res:Response,next:NextFunction)=>{
                        try{
                                    await schema.parseAsync({
                                                body:req.body
                                    });
                                    next()
                        }catch(err){
                              next(err)
                        }
            }
}

router.post('/create-student',validateRequest(StudentValidationSchema), userControllers.createStudent);

export const userRoute=router;