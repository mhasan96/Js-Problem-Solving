// Grade Calculator

function grade(marks) {
  if (marks >= 90 && marks <= 100) {
    console.log("You Got A+ Dear.");
  } else if (marks >= 85 && marks <= 89) {
    console.log("You Got A Dear.");
  } else if (marks >= 80 && marks <= 84) {
    console.log("You Got A- Dear.");
  } else if (marks >= 75 && marks <= 79) {
    console.log("You Got B+ Dear.");
  } else if (marks >= 70 && marks <= 74) {
    console.log("You Got B Dear.");
  } else if (marks >= 65 && marks <= 69) {
    console.log("You Got B- Dear.");
  } else if (marks >= 60 && marks <= 64) {
    console.log("You Got C+ Dear.");
  } else if (marks >= 55 && marks <= 59) {
    console.log("You Got C Dear.");
  } else if (marks >= 0 && marks <= 54) {
    console.log("Sorry Bro you Failed.");
  } else {
    console.log("Insert Variable between 0- 100");
  }
  return marks;
}

var myMarks1 = grade(93);
console.log(myMarks1);
var myMarks2 = grade(87);
console.log(myMarks2);
var myMarks3 = grade(83);
console.log(myMarks3);
var myMarks4 = grade(78);
console.log(myMarks4);
var myMarks5 = grade(73);
console.log(myMarks5);
var myMarks6 = grade(67);
console.log(myMarks6);
var myMarks7 = grade(62);
console.log(myMarks7);
var myMarks8 = grade(56);
console.log(myMarks8);
var myMarks9 = grade(40);
console.log(myMarks9);
var myMarks10 = grade(-6);
console.log(myMarks10);
var myMarks11 = grade(665);
console.log(myMarks11);
