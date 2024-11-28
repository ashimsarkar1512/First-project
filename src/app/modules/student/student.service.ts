import { Student } from '../student.model';
import { TStudent } from './student.interface';

const createStudentIntoDB = async (studentData: TStudent) => {
  if (await Student.isUserExists(studentData.id)) {
    throw new Error('user already existis');
  }
  const result = await Student.create(studentData);

  // const student=new Student(studentData);

  // if(await student.isUserExists(studentData.id)){
  //   throw new Error("user already existis")
  // }

  // const result=student.save()
  return result;
};

const getallStudentFromDB = async () => {
  const result = await Student.find();
  return result;
};
const getSingleStudentFromDB = async (id: string) => {
  // const result = await Student.findOne({ id });
  const result = await Student.aggregate([{ $match: { id: id } }]);
  return result;
};
const deleteStudentFromDB = async (id: string) => {
  const result = await Student.updateOne({ id }, { isDeleted: true });
  return result;
};

export const studentService = {
  createStudentIntoDB,
  getallStudentFromDB,
  getSingleStudentFromDB,
  deleteStudentFromDB,
};
