import { Schema, model } from 'mongoose';

const StudentSchema = new Schema({
  name: { type: String, required: true, maxlength: 50 },
  rollno: { type: Number, required: true, },
  email: { type: String, required: true, },
}, { timestamps: true });

const StudentModel = model("Student", StudentSchema)




export default StudentModel;