// Problem - 01
const calcSquareOrLength = (arg: number | string): number => {
  if (typeof arg === "number") return arg * arg;
  else {
    return arg.length;
  }
};

// Problem - 02
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
class Cat {
  constructor(public name: string, public gender: string) {}
}

const isCat = (obj: Cat): void => {
  if (obj instanceof Cat) console.log("yes, it's a cat.");
  else console.log("no, it's not a cat.");
};

// Problem - 04
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
const findFirstOccurrence = <T>(arr: T[], searchValue: T): number => {
  return arr.indexOf(searchValue);
};

const numArr: number[] = [1, 2, 3, 4, 5, 2];
const strArr: string[] = ["apple", "banana", "cherry", "date", "apple"];
console.log(findFirstOccurrence<number>(numArr, 2));
console.log(findFirstOccurrence<string>(strArr, "cherry"));

// Problem - 08
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
