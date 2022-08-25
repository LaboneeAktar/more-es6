const student = {
    name: 'Kolin Uddin',
    age: 15,
    class: 10,
    marks: {
        math: 78,
        physics: 59,
        chemistry: 50,
    }
}

const marks = student.marks;
const maths = student.marks.math;
console.log(marks, maths);

// another way
const chemistry = student['marks']['chemistry'];
console.log(chemistry);

//
const subject = 'math';
const subjectMarks = student.marks[subject];
console.log(subjectMarks);
