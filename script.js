const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check if all numbers are divisible by 5. Cache the result in a variable.
const allDivisibleBy5 = n1 % 5 === 0 && n2 % 5 === 0 && n3 % 5 === 0 && n4 % 5 === 0;
console.log('All numbers can be devided by 5 is ' + allDivisibleBy5); //true

// Check if the first number is larger than the last. Cache the result in a variable.
const biggetNum = n1>n4; //true
console.log("Is the first number larger than the last? " + biggetNum);

// Subtract the first number from the second number.
// Multiply the result by the third number.
// Find the remainder of dividing the result by the fourth number.
const newNum = ((n2-n1) *n3) % n4; // =0
console.log(newNum);

// Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) in other logic comparisons. Rename the variable as appropriate.
const isAnyOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25; // non is over - false
console.log("Is any number over 25?", isAnyOver25);

// ================== PART 2=======================

const totalDist = 1500;

const speed1 = 55;
const speed2 = 60;
const speed3 = 75;
const fuelEfficiencyAt55m = 30;
const fuelEfficiencyAt60m = 28;
const fuelEfficiencyAt75m = 23;
const totalBudget = 175;
const fuelCostPerGallon = 3;

// How many gallons of fuel will you need for the entire trip?

// #1++++++
// const gallonNeed1 = totalDist / fuelEfficiency[55];
// const gallonNeed2 = totalDist / fuelEfficiency[60];
// const gallonNeed3 = totalDist / fuelEfficiency[75];
// console.log(gallonNeed1);
// console.log(gallonNeed2);
// console.log(gallonNeed3);

// #2++++++
function gallonsNeeded (speed){
    if (speed === 55){
        return totalDist /fuelEfficiencyAt55m;
    } else if (speed === 60) {
        return totalDist /fuelEfficiencyAt60m;
    } else if (speed === 75){
        return totalDist / fuelEfficiencyAt75m;
    } else {
        return "Invalid speed";
    } 
}
console.log("Total gallons needed for driving 55 mi/h: " + gallonsNeeded(55));
console.log("Total gallons needed for driving 55 mi/h: " + gallonsNeeded(60));
console.log("Total gallons needed for driving 55 mi/h: " + gallonsNeeded(75));




// Will your budget be enough to cover the fuel expense?

// #1+++++
// const enoughBugget1 = fuelCostPerGallon * gallonsNeeded(55);
// const enoughBugget2 = fuelCostPerGallon * gallonsNeeded(60);
// const enoughBugget3 = fuelCostPerGallon * gallonsNeeded(75);
// console.log(enoughBugget1);
// console.log(enoughBugget2);
// console.log(enoughBugget2);

// #2+++++
function isBuggetEnough (speed){
    return fuelCostPerGallon * gallonsNeeded(speed) >= totalBudget;
}
console.log(isBuggetEnough(55));
console.log(isBuggetEnough(60));
console.log(isBuggetEnough(75));




// How long will the trip take, in hours?

// #1+++++
// const totalTimeInTrip1 = Math.round (totalDist /speed1);
// const totalTimeInTrip2 = Math.round (totalDist / speed2);
// const totalTimeInTrip3 = Math.round (totalDist / speed3);
// console.log("Total hours of trip if speed is 55 mi/h: " + totalTimeInTrip1 + "hrs");
// console.log("Total hours of trip if speed is 60 mi/h: " + totalTimeInTrip2 + "hrs");
// console.log("Total hours of trip if speed is 75 mi/h: " +  totalTimeInTrip3+ "hrs");

// #2++++++
function totalHoursOfTrip (speed){
    return Math.round(totalDist / speed);
}
console.log(totalHoursOfTrip(55));
console.log(totalHoursOfTrip(60));
console.log(totalHoursOfTrip(75));




// Compare the results when traveling at an average of 55, 60, and 75 miles per hour. Which makes the most sense for the trip?

console.log(`If we travel at ${speed1} miles per hour, 
then it is ${isBuggetEnough(speed1)} that we are traveling over the budget limit. 
In addition, it will take ${totalHoursOfTrip(speed1)} hours to arrive at the destination.`);

console.log(`If we travel at ${speed2} miles per hour, 
then it is ${isBuggetEnough(speed2)} that we are traveling over the budget limit. 
In addition, it will take ${totalHoursOfTrip(speed2)} hours to arrive at the destination.`);

console.log(`If we travel at ${speed3} miles per hour, 
then it is ${isBuggetEnough(speed3)} that we are traveling over the budget limit. 
In addition, it will take ${totalHoursOfTrip(speed3)} hours to arrive at the destination.`);