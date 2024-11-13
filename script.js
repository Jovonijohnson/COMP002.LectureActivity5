/* First debug said NAN */
let myGrades = [100, 100, 90, 73, 78, 94, 86];
let myAverage = 0;

/*The loop is incorrectly starting at 1 instead of 0, which misses the first element and causes an out-of-bounds error on the last iteration. */
/*Changed loop to start from 0 and run until i < myGrades.length to correctly sum all elements.*/
for (let i = 0; i < myGrades.length; i++) {
    myAverage += myGrades[i];
}
    /* The loop condition i <= myGrades.length should be i < myGrades.length to prevent accessing an undefined index. */

    myAverage = myAverage / myGrades.length;

console.log("My grade average is " + myAverage);

/*customized exception class for better error handling */

class GradeError extends Error {
    constructor(message) {
        super(message);
        this.name = 'GradeError';
    }
}
/* Initial function that accepts a number from 0-100 */

function validateGrade(value) {
    if (typeof value !== 'number') {
        throw new GradeError('Input must be a number');
    }
    if (value < 0) {
        throw new GradeError('Input must be greater than or equal to 0');
    }
    if (value > 100) {
        throw new GradeError('Input must be less than or equal to 100');
    }
    return value;
}
/*Grade validation error: Input must be less than or equal to 100 */
try {
    let grade = validateGrade(100); // Tested with an invalid grade
    console.log("Valid grade: " + grade);
} catch (error) {
    if (error instanceof GradeError) {
        console.error("Grade validation error: " + error.message);
    } else {
        console.error("Unexpected error: " + error.message);
    }
}
/* I changed validateGrade(105) to validateGrade(100) and it fixed the code error */