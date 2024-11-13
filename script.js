/* First debug said NAN */
myGrades = [100, 100, 90, 73, 78, 94, 86];

myAverage = 0;

for (let i = 1; i <= myGrades.length; i++) {
    /* The loop condition i <= myGrades.length should be i < myGrades.length to prevent accessing an undefined index. */

myAverage += myGrades[i];

}

myAverage = myAverage / myGrades.length;

console.log("My grade average is " + myAverage);