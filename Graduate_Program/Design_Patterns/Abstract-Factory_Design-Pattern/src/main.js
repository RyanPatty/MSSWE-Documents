import NationalStudentFactory from './NationalStudentFactory.js';
import InternationalStudentFactory from './InternationalStudentFactory.js';
import { GraduateStudent, UndergraduateStudent } from './Student.js';

// Instantiate factories
const nationalStudentFactory = new NationalStudentFactory();
const internationalStudentFactory = new InternationalStudentFactory();

// Student storage
let students = [];

// Create students
students.push(nationalStudentFactory.createGraduate('Ryan Oconnor', 'SWE Major'));
students.push(nationalStudentFactory.createGraduate('Kimbo Slice', 'SWE Major'));
students.push(nationalStudentFactory.createGraduate('Donkey Mckong', 'SWE Major'));
students.push(internationalStudentFactory.createUndergraduate('Timmy Poppins', 'CS Major'));

// Query all graduate students
let graduateStudents = students.filter(student => student instanceof GraduateStudent);

// Print graduate students
graduateStudents.forEach(student => {
    console.log(`Name: ${student.getName()}, Features: ${student.getFeatures()}`);
});

// Insertion - adding new student
let newStudent = nationalStudentFactory.createUndergraduate('John Doe', 'Math Major');
students.push(newStudent);

// Deletion - removing a student, in this case 'Ryan Oconnor'
students = students.filter(student => student.getName() !== 'Ryan Oconnor');

/*
 I haven't added this feature yet, but I would imagine it would look something like this:
Update - changing the feature of a student, in this case 'Timmy Poppins'
students = students.map(student => {
    if (student.getName() === 'Timmy Poppins') {
        student.setFeatures('Math Major');
    }
    return student;
});*/

// View - seeing all students
students.forEach(student => {
    console.log(`Name: ${student.getName()}, Features: ${student.getFeatures()}`);
});