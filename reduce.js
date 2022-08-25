const numbers = [1, 2, 3, 4, 5, 6];
// .reduce (accumulatorFunction, initial value)
// accumulator function used two parameters

// const total = numbers.reduce((previous, current) => previous + current, 0);  // single line

// multiline
const total = numbers.reduce((previous, current) => {
    console.log(previous, current);
    return previous + current
}, 0);
console.log(total);