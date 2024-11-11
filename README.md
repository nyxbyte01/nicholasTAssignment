# Assignment 1 - School Enrollment System

This project provides a Node.js module for managing a school enrollment system. It allows you to register students, create courses, assign instructors, and enroll both students and instructors into courses.

Node Module Overview
The Node.js module (NicholasThiam_WebAPIDevelopment.js) includes the following key functions:
- creating / registering students
    This function allows you to create / register new students.
    To do this, you need to use the createStudents function.
    Parameters: The name of the student (string), admin number of the student (string), 
    example: enrollment.createStudents("Adam", "294304H");

- creating courses
    This function allows you to create courses.
    To do this, you need to use the addCourse function.
    Parameters: The name of the course (string), module number of the course (string), 
    example: enrollment.addCourse("Industry Systems Project", "EGL304");

- creating / registering instructors
    This function allows you to create / register new instructors.
    To do this, you need to use the createInstructor function.
    Parameters: The name of the instructor (string), admission number of the instructor (string), 
    example: enrollment.createInstructor("Mr Goh", "284924U");

- assigning students to the specified courses
    This function allows you to assign students to specific courses.
    To do this, you need to use the enrollStudentInCourse function.
    Parameters: The student's admin number (string), the module code of the course (string), 
    example: enrollment.enrollStudentInCourse("294304H", "EGL304");

- assigning instructor to the specified courses
    This function allows you to assign instructors to specific courses.
    To do this, you need to use the enrollInstructorInCourse function.
    Parameters: The instructor's admin number (string), the module code of the course (string), 
    example: enrollment.enrollInstructorInCourse("284924U", "EGL304");

Example app.js : 
console.log("Starting the school enrollment application");
const enrollment = require("./NicholasThiam_WebAPIDevelopment.js");

// Adding students
enrollment.createStudents("Adam", "294304H");

// Adding courses
enrollment.addCourse("Industry Systems Project", "EGL304");

// Adding instructors
enrollment.createInstructor("Mr Goh", "284924U");

// Enrolling students in courses
enrollment.enrollStudentInCourse("294304H", "EGL304");

// Enrolling instructors in courses
enrollment.enrollInstructorInCourse("284924U", "EGL304");

Expected Output :
Starting the school enrollment application.
Adam has been successfully registered.
Industry Systems Project has been successfully created.
Mr Goh has been successfully registered.
Student Adam enrolled in Industry Systems Project.
Instructor Mr Goh assigned to Industry Systems Project.

# References
I used ChatGPT to help me debug my program at the end as i had many spelling issues.