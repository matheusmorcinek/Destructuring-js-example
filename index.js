const pairNumbers = [2, 4, 6];
const oddNumbers = [3, 5, 7];

const numbers = [pairNumbers, oddNumbers];

console.log(numbers);

//now using destructuring
const numbersArray = [...pairNumbers, ...oddNumbers];

console.log(numbersArray);