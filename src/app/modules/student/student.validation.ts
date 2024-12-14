import { z } from 'zod';

// UserName Schema
const userNameValidationSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(1, 'First name is required')
    .max(20, 'First name cannot be more than 20 characters'),
  middleName: z.string().trim().min(1, 'Middle name is required'),
  lastName: z.string().trim().min(1, 'Last name is required'),
});

// Guardian Schema
const guardianValidationSchema = z.object({
  fatherName: z.string().trim().min(1, "Father's name is required"),
  fatherOccupation: z.string().trim().min(1, "Father's occupation is required"),
  fatherContactNo: z
    .string()
    .trim()
    .min(1, "Father's contact number is required"),
  motherName: z.string().trim().min(1, "Mother's name is required"),
  motherOccupation: z.string().trim().min(1, "Mother's occupation is required"),
  motherContactNo: z
    .string()
    .trim()
    .min(1, "Mother's contact number is required"),
});

// Local Guardian Schema
const localGuardianValidationSchema = z.object({
  name: z.string().trim().min(1, "Local guardian's name is required"),
  occupation: z
    .string()
    .trim()
    .min(1, "Local guardian's occupation is required"),
  contactNo: z
    .string()
    .trim()
    .min(1, "Local guardian's contact number is required"),
  address: z.string().trim().min(1, "Local guardian's address is required"),
});

// Main Student Schema
export const StudentValidationSchema = z.object({
 body:z.object({
 
  password: z.string().max(20),
 student:z.object({
  name: userNameValidationSchema,
  gender: z.enum(['male', 'female', 'other']),
  dateOfBirth: z.string().optional(), // Assuming a date string format
  email: z
    .string()
    .trim()
    .email('Email is not valid')
    .min(1, 'Email is required'),
  contactNo: z.string().trim().min(1, 'Contact number is required'),
  emergencyContactNo: z
    .string()
    .trim()
    .min(1, 'Emergency contact number is required'),
  bloodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']),
  presentAddress: z.string().trim().min(1, 'Present address is required'),
  permanentAddress: z.string().trim().min(1, 'Permanent address is required'),
  guardian: guardianValidationSchema,
  localGurdian: localGuardianValidationSchema,
  profileImg: z.string().url('Profile image must be a valid URL').optional(),
 })
})
});

export  const studentValidations={
StudentValidationSchema
};
