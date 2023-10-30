let marks = 102;

// Define the calculatingGrade function
function calculatingGrade(marks) {
    let grade;

    if (marks >= 80 && marks <= 100) {
        grade = 'A';
    } else if (marks >= 60 && marks <= 79) {
        grade = 'B';
    } else if (marks >= 49 && marks <= 59) {
        grade = 'C';
    } else if (marks >= 40 && marks <= 48) {
        grade = 'D';
    } else if (marks >= 0 && marks < 40) {
        grade = 'E';
    } else {
        console.error('Invalid input, kindly provide valid marks.');
        return 'Unable to calculate grade, please input your marks.';
    }

    return grade;
}

// Call the calculatingGrade function and store the result in grademessage variable
let grademessage = calculatingGrade(marks);

console.log(`Your current grade is ${grademessage}.`);
