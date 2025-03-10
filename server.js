import express from 'express';
import connectDB from './database.js';
import StudentModel from './models/studentModel.js';
const app = express();
const port = 3000;
app.use(express.json());
connectDB();
app.get("/", (req, res) => {
  res.send("Data is coming from yusra");
});
app.get("/students", async (req, res) => {
  try {
    const students = await StudentModel.find();
    res.status(200).send(students);
  } catch (error) {
    res.send({
      status: 500,
      message: "data nhn mila"
    })
  }

});
app.post("/students", async (req, res) => {
  try {
    const { name, rollno, email } = req.body;
    const newStudent = new StudentModel({ name, rollno, email });
    const result = await newStudent.save();
    res.status(201).send(result);
  } catch (error) {
    res.send({
      status: 500,
      message: "data nhn mila"
    })
  }

});

app.patch("/students/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, rollno, email } = req.body;
    const updatedStudent = await StudentModel.findByIdAndUpdate(id, { name, rollno, email })
    res.status(201).send("User Updated");
  } catch (error) {
    res.send({
      status: 500,
      message: "data nhn mila"
    })
  }

});
app.delete("/students/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedStudent = await StudentModel.findByIdAndDelete(id)
    res.status(201).send("User Deleted");
  } catch (error) {
    res.send({
      status: 500,
      message: "data nhn mila"
    })
  }

});
app.listen(port, () => {
  console.log(`Hey Your server is running on http://localhost:${port}`)
})