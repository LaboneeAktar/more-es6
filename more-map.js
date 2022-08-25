const numbers = [12, 56, 87, 44];
const half = numbers.map(n => n / 2);
const third = numbers.map(n => n / 3);
// console.log(half);
// console.log(third);


const friends = ['Tina', 'Mina', 'Rina', 'Tinku', 'pinku'];
const firstLetter = friends.map(fl => fl[0]);
// console.log(firstLetter);
const nameLengths = friends.map(fname => fname.length);
// console.log(nameLengths);


const products = [
    { id: 1, name: 'laptop', price: 450000 },
    { id: 2, name: 'iphone', price: 1450000 },
    { id: 3, name: 'smart watch', price: 50000 },
    { id: 4, name: 'mobile', price: 10000 },
]

// const items = products.map(product => console.log(product.name));
const items = products.map(product => product.name);
console.log(items);