//1. let and const
const number = 30; //Not changeable the value
var numbers = 50;
numbers = 60;

//2. default parameter
function calculateSalary(salary, tax = 0.25, bonus = 0) {
    const remaining = salary - salary * tax;
    const total = remaining + bonus;
    return total;
}

//3. template string
const elementHTML = `
<div>
    <h3>Name:</h3>
    <h3>Address:</h3>
    <h3>Salary: ${calculateSalary(10000, 0, 0)}</h3>
    <h3>Others: ${numbers}</h3>
</div>
`
console.log(elementHTML);

//4. Arrow function
const doubleIt = x => x * 2;
const calculateSalary2 = (salary, bonus, tax) => salary - salary * tax + bonus;

// 5. spread
const ages = [11, 22, 11, 23, 4, 5, 2, 223, 44];
const newAges = [...ages, 44, 55, 66];

//destructuring
