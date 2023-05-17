import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Student } from './entities/student.entity';
import { Model } from 'mongoose';

@Injectable()
export class StudentsService {
  constructor(
    @InjectModel(Student.name) private readonly studentModel: Model<Student>,
  ) {}
  async create(createStudentDto: CreateStudentDto) {
    return await this.studentModel.create(createStudentDto);
  }

  async findAll() {
    return await this.studentModel.find();
  }

  async findOne(_id: string) {
    return await this.studentModel.findOne({ _id });
  }

  async findOneByEmail(email: string) {
    return await this.studentModel.findOne({ email });
  }

  async update(_id: string, updateStudentDto: UpdateStudentDto) {
    const result = await this.studentModel.findOneAndUpdate(
      { _id },
      updateStudentDto,
    );
    return result;
  }

  async removeStudent(_id: string):Promise<Student>  {
   return await this.studentModel.findByIdAndDelete({ _id });
    
  }
}
