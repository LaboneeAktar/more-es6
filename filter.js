const numbers = [12, 34, 5, 6, 778, 897, 45, 35, 334, 66, 188, 100, 44];
const bigNums = numbers.filter(number => number >= 100);
const tiny = numbers.filter(number => number < 100);
const evenNum = numbers.filter(number => number % 2 == 0);
const oddNum = numbers.filter(number => number % 2 !== 0);
// console.log(bigNums);
// console.log(tiny);
// console.log(evenNum);
// console.log(oddNum);


const products = [
    { id: 1, name: 'laptop', price: 50000 },
    { id: 2, name: 'iphone', price: 150000 },
    { id: 3, name: 'smart watch', price: 50000 },
    { id: 4, name: 'mobile', price: 10000 },
];
const expensive = products.filter(product => product.price > 100000);
console.log(expensive);