// Problem - 01
// Design a TypeScript function that takes a parameter of a union type (e.g., string | number). If it's a string, return its length. If it's a number, return the square of that number.

const calcSquareOrLength = (arg: number | string): number => {
  if (typeof arg === "number") return arg * arg;
  else {
    return arg.length;
  }
};

// Problem - 02
// Create an interface called Person with optional properties address and phone. The address property itself will be another object containing city and street properties. Implement a function named getAddressCity that takes an argument of type Person and returns the city from the address property of the Person object. Use optional chaining to prevent any type errors.

interface Person {
  address?: {
    city: string;
    street: string;
  };
  phone?: string;
}

const getAddressCity = (person: Person): string => {
  if (person.address === undefined) return "City not found!";
  return person.address?.city;
};

// Problem - 03
// Create a type guard function isCat that checks if an object is an instance of a Cat class. If it does, the function says "yes, it's a cat." If it doesn't match, the function says "no, it's not a cat."

class Cat {
  constructor(public name: string, public gender: string) {}
}

const isCat = (obj: Cat): void => {
  if (obj instanceof Cat) console.log("yes, it's a cat.");
  else console.log("no, it's not a cat.");
};

// Problem - 04
// You got a list that has numbers and words mixed together. Your job is to make a function that will take the list as an argument and return the total by adding them up.
// To solve this in TypeScript, you'll look at each thing in the list named mixedData, which looks like this: [1, 'two', 3, 'four', 5]. You'll go through the list, find the numbers, and add them together.
// Every time you find a number in the list, you'll add it to a total. You'll start at zero and then keep adding the numbers you find. If no number is found in the list return 0. To make sure TypeScript knows these things are numbers, you'll use type assertions.

const mixedData: Array<number | string> = [1, "two", 3, "four", 5];
const addTotal = (list: Array<number | string>): number => {
  const sum = list.reduce((sum, current) => {
    if (typeof current === "number") return (sum as number) + current;
    else return (sum as number) + 0;
  }, 0);

  return sum as number;
};

console.log(addTotal(mixedData));

// Problem - 05
// Define two interfaces: Car with properties like make, model, and year, and Driver with properties like name and licenseNumber. Create a function that takes two objects of type Car and Driver and returns an object with the combined properties of both types.

interface Car {
  make: string;
  model: string;
  year: number;
}

interface Driver {
  name: string;
  licenseNumber: number;
}

const getCarDriver = (car: Car, driver: Driver): Car & Driver => {
  return { ...car, ...driver };
};

// Problem - 06
// Write a TypeScript function that takes a parameter of type unknown and uses a type guard to check whether the parameter is an array of numbers. If it is, calculate the sum of the numbers and log it. If it's not, log an error message.

const displaySum = (arg: unknown): void => {
  if (Array.isArray(arg) && arg.length !== 0) {
    if (arg.every((element) => typeof element === "number")) {
      const sum = arg.reduce((sum, currentElement) => sum + currentElement, 0);
      console.log(sum);
      return;
    }
  }

  console.log("Provide an array of number!");
  return;
};

// Problem - 07
// Create a TypeScript function called findFirstOccurrence that accepts an array and a value to search for. Use generics to make the function work with arrays of any data type. Inside the function, find and return the index of the first occurrence of the value in the array. If the value is not found in the array, return -1 to indicate that. Create sample arrays of different data types (e.g., numbers, strings) and call the findFirstOccurrence function for each of them to display the results.

const findFirstOccurrence = <T>(arr: T[], searchValue: T): number => {
  return arr.indexOf(searchValue);
};

const numArr: number[] = [1, 2, 3, 4, 5, 2];
const strArr: string[] = ["apple", "banana", "cherry", "date", "apple"];
console.log(findFirstOccurrence<number>(numArr, 2));
console.log(findFirstOccurrence<string>(strArr, "cherry"));

// Problem - 08
// Create a TypeScript program that simulates a simple shopping cart. Define an interface Product with properties like name, price, and quantity. Implement a function that calculates the total cost of the items in the shopping cart. The function should take an array of Product objects as input and return the total cost.

interface Product {
  name: string;
  price: number;
  quantity: number;
}

const calculateTotalCoast = (products: Product[]): number => {
  return products.reduce((total, { price, quantity }) => {
    return total + price * quantity;
  }, 0);
};
