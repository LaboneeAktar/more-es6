/*
................. .map(), .filter(), .find().................
1) You have an odd array (array with odd numbers). [ 1, 3, 5, 7, 9 ].
Now convert this array into an even array (array with even 
numbers). [ 2, 4, 6, 8, 10 ]. Do this using for loop & array.map()
method. Hints: add one to any odd number and it will become an even 
number. 
*/

// Using for loop
const array1 = [1, 3, 5, 7, 9];

for (let i = 0; i < array1.length; i++) {
    const index = array1[i];
    const evenArrays = index + 1;
    // console.log(evenArrays);
}

// Using .map()
const array2 = [1, 3, 5, 7, 9];
const evenArray = array2.map(array => array + 1);
// console.log(evenArray);


/*
2) You are given an array say: [33, 50, 79, 78, 90, 101, 30 ]. Now 
return/get all the elements which are divisible by 10 using 
array.filter() method.
*/

const givenArray = [33, 50, 79, 78, 90, 101, 30];
const divisibleBy10 = givenArray.filter(arr => arr % 10 == 0);
// console.log(divisibleBy10);

/**
 3) Now do the same task of question 2. But do this using array.find()
method. Then compare the output of question 2 & question 3. 
 */

const givenArray2 = [33, 50, 79, 78, 90, 101, 30];
const divisible = givenArray.find(arr => arr % 10 == 0);
// console.log(divisible);


//................ .reduce()....................
/**
1) You have an array [ 1, 9, 17, 22 ]. Add the all elements 
of this array and give output. Do this using for loop & 
array.reduce() method. 
*/

// using for loop

const numbers = [1, 9, 17, 22];
let sum = 0;
for (number of numbers) {
    sum = sum + number;
}
// console.log(sum);

// using .reduce()
const numbers2 = [1, 9, 17, 22];
const addNumbers = numbers2.reduce((fist, second) => {
    // console.log(fist, second);
    const add = fist + second;
    return add
}, 0)
// console.log(addNumbers);


/**
1) Challenging Follow above array of objects. So, you have 3 objects as 
array element. Can you find out the total sum from here? 
20 + 15 + 22 = 57 . The output will be 57
What are you thinking? Yeah! Do it with for loop. I know you can do it. 
But! Wait !! Wait !!! Do the same task using array.reduce() method. 
*/

//for loop
const peoples = [
    { name: 'Mina', age: 20 },
    { name: 'Rina', age: 15 },
    { name: 'Suchorita', age: 22 }
]

let sumOfAges = 0;
for (const people of peoples) {
    const ageOfEach = people.age;
    sumOfAges = sumOfAges + ageOfEach;
}
// console.log(sumOfAges);

// .reduce()
const findAges = peoples.reduce((previous, current) => {
    const sumOfAge = previous + current.age;
    return sumOfAge
}, 0)
// console.log(findAges);


////////////
const student = {
    name: 'Fredie',
    age: 26
}
// console.log(student.age);

///// ///
let data = {
    location: [
        {
            latitude: '34.5, 37.8',
            longitude: '98.88, 58.55',
            city: 'Hydrabad',
            country: 'india'
        }
    ]
}
const city = data.location[0].city;
// console.log(city);

/////
const user = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
            lat: "-37.3159",
            lng: "81.1496"
        }
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets"
    }
}

/**
 *  Console the value of email
 * Console the value of address
 * Console the value of city
 * Console the value of lat
 * Console the value of company name
 */

console.log(user.email);
console.log(user.address);
console.log(user.address.city);
console.log(user.address.geo.lat);
console.log(user.company.name);