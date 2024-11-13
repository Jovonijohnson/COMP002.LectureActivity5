/* First debug said NAN */
let myGrades = [100, 100, 90, 73, 78, 94, 86]; let myAverage = 0;
myAverage = 0;

/*The loop is incorrectly starting at 1 instead of 0, which misses the first element and causes an out-of-bounds error on the last iteration. */
for (let i = 0; i < myGrades.length; i++) { myAverage += myGrades[i]; }

    /* The loop condition i <= myGrades.length should be i < myGrades.length to prevent accessing an undefined index. */

myAverage = myAverage / myGrades.length;

console.log("My grade average is " + myAverage);