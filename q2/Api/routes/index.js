const express = require("express");
const controllerStudents = require("../controllers/student.controllers");

console.log("here")
const router = express.Router();


router.route("/students")
      .get(controllerStudents.getallstudents)


router.route("/students/:studentId")
      .get(controllerStudents.getonestudent)

router.route("/students/:studentId/course")
      .get(controllerStudents.getstudentcourses)

router.route("/students/:studenId/course/:courseId")
      .get(controllerStudents.getonestudentcourse)

    module.exports = router;  









    


    
