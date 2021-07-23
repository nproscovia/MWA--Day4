const mongoose = require("mongoose");
const Student = mongoose.model("Student");


module.exports.getallstudents = function(req,res){

    console.log("yessssssshhhhhhhh")

    console.log("getall students");
    let count =6;
    let offset = 0;
    
    if(require.query && require.query.count){
        count = parseInt(req.query.count, 10);
    
    }
    
    if(req.query && req.query.offset){
        offset = parseInt(req.query.offset, 10);
    }
    Student.find().skip(offset).limit(count).exec(function(err, Students){
        console.log("found all students", Students.length);
        res.status(200).json(Students);
    
    });
}

module.exports.getonestudent= function(req, res){
      
        console.log("get one student");
        const studentId = req.params.studentId;
    
        Student.findById(studentId).exec(function(err, Students){
            res.status(200).json(Students);
        })
}

module.exports.getstudentcourses= function(req, res){
   
    const studentId = req.params.studentId;

        Student.findById(studentId).select("course").exec(function(err, Students) {
            console.log("student courses got");
            res.status(200).json(Students);

        });
    
}

module.exports.getonestudentcourse= function(req, res){
    const studentId = req.params.studentId;
    const courseId = req.params.courseId;

        Student.findById(studentId).select("course").exec(function(err, Students) {

            const selectedCourse= Students.course.id(courseId);
            console.log("one course for student found");
            res.status(200).json(selectedCourse);
        })
}


