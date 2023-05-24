import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { nanoid } from "nanoid";
import { Student } from "src/students/entities/student.entity";
export class BasketItem {
    courseId: string;
    quantity: number;
}

@Schema({timestamps: true})
export class Basket {
    @Prop({ default: () => nanoid() })
    _id: string;

    @Prop()
    studentId: string;

    student: Student;
    
    @Prop({ type: [{ courseId: { type: String, ref: 'Course'}, quantity: Number}] })
    items: BasketItem[];

    @Prop({ default: true})
    isMain: boolean;

    createdAt: Date;
    updatedAt: Date;
}

export const BasketSchema = SchemaFactory.createForClass(Basket);

BasketSchema.virtual('student', {
  ref: 'Student',
  localField: 'studentId',
  foreignField: '_id',
  justOne: true,
});