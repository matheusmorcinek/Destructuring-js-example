const pairNumbers = [2, 4, 6];
const oddNumbers = [3, 5, 7];

const numbers = [pairNumbers, oddNumbers];

console.log(numbers);

//now using destructuring
const numbersArray = [...pairNumbers, ...oddNumbers];

console.log(numbersArray);

// const num1 = 1;
// const num2 = 2;
//or
const [num1, num2, ...otherNumbers] = [1, 2, 3, 4, 5];

console.log(num1, num2, otherNumbers);

//default value
const [name1 = `Matheus`] = [1];
// const [name1 = `Matheus`] = [];

console.log(name1);

const person = {
    name: `Matheus`,
    age: 29
};

const personWithPhone = {
    ...person,
    phone: 123456789
};

console.log(personWithPhone);