import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { nanoid } from "nanoid";
import { Student } from "src/students/entities/student.entity";
export class BasketItem {
    courseId: string

}

@Schema({timestamps: true})
export class Basket {
    @Prop({ default: () => nanoid() })
    _id: string
    @Prop()
    studentId: string

    student: Student
    @Prop()
    items: BasketItem[]

    createdAt: Date;
    updatedAt: Date;
}

export const BasketSchema = SchemaFactory.createForClass(Basket)

BasketSchema.virtual('student', {
  ref: 'Student',
  localField: 'studentId',
  foreignField: '_id',
  justOne: true,
});