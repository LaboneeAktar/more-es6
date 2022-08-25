const numbers = [2, 4, 6, 8, 3];
const output = [];
for (const number of numbers) {
    const double = number * 2;
    output.push(double);
}
// console.log(output);


const numbers2 = [12, 2, 16, 18, 13];
function getDoubles(numbers2) {
    const output2 = [];
    for (const number of numbers2) {
        const double = doubleIt(number); //Call arrow function
        output2.push(double);
    }
    return output2;
}
const doubleIt = num => num * 2; //using arrow function

const makeDouble = numbers2.map(doubleIt);
const makeDoubleDirect = numbers2.map(num => num * 2);


const result = getDoubles(numbers2);
console.log(result);
console.log(makeDouble);
console.log(makeDoubleDirect);


const fiveTimes = [1, 2, 3, 4, 5].map(x => x * 5);
console.log(fiveTimes);