module.exports = {
    // Register new students
    students:[],
    createStudents(studentN, admNo) {
        this.students.push({studentN:studentN, admNo: admNo});
        console.log(studentN+" has been successfully registered");
    },
    // add new courses
    courses:[],
    addCourse(name,code){
        this.courses.push({name:name,code:code, students: [], instructors: []});
        console.log(name +" has been successfully created");
    },
    // register instructors
    instructors: [],
    createInstructor(instructorN, instAdminNo) {
        this.instructors.push({ instructorN: instructorN, instAdminNo: instAdminNo });
        console.log(instructorN + " has been successfully registered");
    },
    // assign student to course
    enrollStudentInCourse(studentAdmNo, courseCode) {
        // Find the student by admission number
        const student = this.students.find(st => st.admNo === studentAdmNo);
        if (!student) {
            console.log("Student not found!");
            return;
        }

        // Find the course by course code
        const course = this.courses.find(c => c.code === courseCode);
        if (!course) {
            console.log("Course not found!");
            return;
        }

        // Enroll the student in the course
        course.students.push(student);
        console.log(`Student ${student.studentN} enrolled in ${course.name}`);
    },
    // assign instructor to course
    enrollInstructorInCourse(instAdminNo, courseCode) {
        // Find the instructor by admission number
        const instructor = this.instructors.find(inst => inst.instAdminNo === instAdminNo);
        if (!instructor) {
            console.log("Instructor not found!");
            return;
        }

        // Find the course by course code
        const course = this.courses.find(c => c.code === courseCode);
        if (!course) {
            console.log("Course not found!");
            return;
        }

        // Enroll the instructor in the course
        course.instructors.push(instructor);
        console.log(`Instructor ${instructor.instructorN} assigned to ${course.name}`);
    }
};