//.....both have condition but find only show first result but filter show all......

const numbers = [12, 34, 5, 6, 778, 897, 45, 35, 334, 66, 188, 100, 44];
// const filterFives = numbers.filter(num => num % 5 === 0);
const fives = numbers.find(num => num % 5 === 0);

// console.log(filterFives);
console.log(fives);



const products = [
    { id: 1, name: 'laptop', price: 50000 },
    { id: 2, name: 'iphone', price: 150000 },
    { id: 4, name: 'mobile', price: 10000 },
    { id: 3, name: 'smart watch', price: 50000 },
];
const expensive = products.find(product => product.price < 40000);
console.log(expensive);