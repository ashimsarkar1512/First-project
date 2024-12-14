import { Schema, model } from 'mongoose';
import validator from 'validator';


import { StudentModel, TGurdian, TLocalGurdian, TStudent, TUserName } from './student.interface';



const userNameSchema = new Schema<TUserName>({
  firstName: {
    type: String,
    required: [true, 'first name is required'],
    trim: true,
    maxlength: [20, 'first name can not be more than 20 '],
    // validate:{
    //  validator: function(value:string){
    //     const firstNameStr=value.charAt(0).toUpperCase() + value.slice(1);
    //     return firstNameStr===value
    //   },
    //   message:'{VALUE} is not in capatalize format'
    // }
  },
  middleName: {
    type: String,
    required: [true, 'Middle name is required'],
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],
    trim: true,

    // validate:{
    //   validator:(value:string)=>validator.isAlpha(value),
    //   message:'{VALUE} is not valid'
    // }
  },
});

const guardianSchema = new Schema<TGurdian>({
  fatherName: {
    type: String,
    required: [true, "Father's name is required"],
    trim: true,
  },
  fatherOccupation: {
    type: String,
    required: [true, "Father's occupation is required"],
    trim: true,
  },
  fatherContactNo: {
    type: String,
    required: [true, "Father's contact number is required"],
    trim: true,
  },
  motherName: {
    type: String,
    required: [true, "Mother's name is required"],
    trim: true,
  },
  motherOccupation: {
    type: String,
    required: [true, "Mother's occupation is required"],
    trim: true,
  },
  motherContactNo: {
    type: String,
    required: [true, "Mother's contact number is required"],
    trim: true,
  },
});

const localGurdianSchema = new Schema<TLocalGurdian>({
  name: {
    type: String,
    required: [true, "Local guardian's name is required"],
    trim: true,
  },
  occupation: {
    type: String,
    required: [true, "Local guardian's occupation is required"],
    trim: true,
  },
  contactNo: {
    type: String,
    required: [true, "Local guardian's contact number is required"],
    trim: true,
  },
  address: {
    type: String,
    required: [true, "Local guardian's address is required"],
    trim: true,
  },
});

const studentSchema = new Schema<TStudent, StudentModel>(
  {
    id: { type: String, required: true, unique: true },

    user:{
           type:Schema.Types.ObjectId,
           required:[true,"user id id required"],
           unique:true,
           ref:'user'
    },
   
    name: {
      type: userNameSchema,
      required: [true, 'Student name is required'],
      trim: true,
    },
    gender: {
      type: String,
      enum: {
        values: ['male', 'female', 'other'],
        message: '{VALUE} is not valid',
      },
      required: true,
      trim: true,
    },
    dateOfBirth: { type: String },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      trim: true,
      validate: {
        validator: (value: string) => validator.isEmail(value),
        message: '{VALUE} is not valid',
      },
    },
    contactNo: {
      type: String,
      required: [true, 'Contact number is required'],
      trim: true,
    },
    emergencyContactNo: {
      type: String,
      required: [true, 'Emergency contact number is required'],
      trim: true,
    },
    bloodGroup: {
      type: String,
      enum: {
        values: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
        message: '{VALUE} is not valid',
      },
      required: true,
      trim: true,
    },
    presentAddress: {
      type: String,
      required: [true, 'Present address is required'],
      trim: true,
    },
    permanentAddress: {
      type: String,
      required: [true, 'Permanent address is required'],
      trim: true,
    },
    guardian: {
      type: guardianSchema,
      required: [true, 'Guardian information is required'],
      trim: true,
    },

    localGurdian: {
      type: localGurdianSchema,
      required: [true, 'Guardian information is required'],
      trim: true,
    },

    profileImg: { type: String },
    isActive: {
      type: String,
      enum: ['active', 'blocked'],
      default: 'active',
    },

    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  },
);

studentSchema.virtual('fullName').get(function () {
  return `${this.name.firstName} ${this.name.middleName} ${this.name.lastName}`;
});


studentSchema.pre('find', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

studentSchema.pre('aggregate', function (next) {
  this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
  next();
});

studentSchema.pre('findOne', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

// creating a statics method

studentSchema.statics.isUserExists = async function name(id: string) {
  const exitingUser = await Student.findOne({ id });
  return exitingUser;
};

// creating a custom instand method

// studentSchema.methods.isUserExists=async function(id:string) {

//   const exitingUser=await Student.findOne({id});
//   return exitingUser;
// }

export const Student = model<TStudent, StudentModel>('Student', studentSchema);
