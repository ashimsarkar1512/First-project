import Joi from 'joi';

// Define the validation schemas
const userNameSchema = Joi.object({
  firstName: Joi.string()
    .required()
    .trim()
    .max(20)
    .pattern(/^[A-Z][a-z]*$/, 'capitalize')
    .messages({
      'string.pattern.base':
        '{#label} must start with an uppercase letter followed by lowercase letters',
    }),
  middleName: Joi.string().trim(),
  lastName: Joi.string()
    .required()
    .pattern(/^[a-zA-Z]*$/, 'alpha')
    .messages({
      'string.pattern.base':
        '{#label} must only contain alphabetical characters',
    }),
});

const guardianValidationSchema = Joi.object({
  fatherName: Joi.string().required(),
  fatherOccupation: Joi.string().required(),
  fatherContactNo: Joi.string().required(),
  motherName: Joi.string().required(),
  motherOccupation: Joi.string().required(),
  motherContactNo: Joi.string().required(),
});

const localGuardianValidationSchema = Joi.object({
  name: Joi.string().required(),
  occupation: Joi.string().required(),
  contactNo: Joi.string().required(),
  address: Joi.string().required(),
});

const studentValidationSchema = Joi.object({
  id: Joi.string(),
  name: userNameSchema.required(),
  gender: Joi.string().required().valid('male', 'female', 'other'),
  dateOfBirth: Joi.string().isoDate().required(),
  email: Joi.string().email().required(),
  contactNo: Joi.string().required(),
  emergencyContactNo: Joi.string().required(),
  bloodGroup: Joi.string()
    .valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-')
    .required(),
  presentAddress: Joi.string().required(),
  permanentAddress: Joi.string().required(),
  guardian: guardianValidationSchema.required(),
  localGurdian: localGuardianValidationSchema.required(),
  profileImg: Joi.string().uri(),
  isActive: Joi.string().valid('active', 'blocked').default('active'),
});

export default studentValidationSchema;
