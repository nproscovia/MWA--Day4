const mongoose = require("mongoose");



const coursesSchema =  new mongoose.Schema({
    courseName:{
        type:String,
        required:true
    },
    professorName:{
        type: String,
        age: Number

    },
    courseId:{
        type: Number,
        required: true
    }
})
const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    gpa: {
        type: Number   
    }, 

    course:[coursesSchema],
})


mongoose.model("Student", studentSchema, "Students");