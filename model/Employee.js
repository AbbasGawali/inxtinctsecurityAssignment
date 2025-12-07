import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  joinDate: {
    type: Date,
    required: true,
  },
});

const Employee = new mongoose.model("Employee", employeeSchema);
export default Employee;
