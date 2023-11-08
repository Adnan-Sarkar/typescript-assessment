# Interview Questions:

### **1. What are some benefits of using TypeScript over JavaScript in a project?**

- **type safety**
  Using typescript in a project will be beneficial because of `type safety`. Type safety ensures that code is more predictable and there is no unexpected value which might be causes bugs.<br><br>

- **difficult to maintain**
  In a project, there will be multiple developers who contribute to that project, If each developer write codes in diffrent approach then it will be difficult to maintain the project. But using typescript everyone has to maintain type safety and their codes are organized with a similar pattern, So that bugs can be found easily.<br><br>

- **Supports older browsers**
  Typescript can be converted to any version of the javascript, So that single codebase can be converted for older browser which doesn't support new versions of the javascript. At the same time same code can be converted for mordern javascript version.

All of these benefits can possible if we use typeScript over javaScript in a project.

### **2. What is the purpose of the optional chaining (?.) and nullish coalescing (??) operators in TypeScript, and how do they work? Provide an example for each**

- **optional chaining (?.)**
  Typescript allows us to make a `type` object with optional properties. So that an object has a property sometimes and sometimes can't.

  ```ts
  type Person = {
    name: string;
    age: number;
    skills?: string[];
  };
  ```

  Person type has one optional property `skills`, so that we can create an object with skills and without skills.

  ```ts
  // with skills property
  const person1: Person = {
    name: "Adnan",
    age: 55,
    skills: ["HTML", "CSS", "Javascript"],
  };

  // without skills property
  const person2: Person = {
    name: "Sarkar",
    age: 40,
  };
  ```

  Now, If any code accesses the skills from the `Person` type object, then it might be causes a bug because of `undefined`. Let's see an example.

  ```ts
  const displaySkills = (person: Person): void => {
    person.skills.forEach((skill) => console.log(skill));
  };

  displayAddress(person1); // "HTML", "CSS", "Javascript"
  displayAddress(person2); // ERROR
  ```

  In this case, getting `ERROR` for the person2 object, Which is because we are accessing the optional property directly without checking if is it available or not. So, we can use optional chaining (?.) to prevent that error. Let's see how it works.

  ```ts
  // without optional chaining
  person2.skills;
  // directly accessing property skills,
  // without checking is it availale or not

  // with optional chaining
  person2?.skills.map(...);
  // checking is skills property is undefined or not,
  // If not then do skills.map(...), otherwise stop
  ```

  So, optional chaining prevents us from performing the `map(...)` method on undefined.<br><br>

- **nullish coalescing (??)**
  This is a dedicated operator for checking `null` and `undefined`. We can check if a variable or value is null or undefined. We can use this operator to create an alternative way, like if it is null or undefined then

  ```ts
  const x = null;
  const y = undefined;

  console.log(x ?? "do this...");
  console.log(y ?? "do this...");
  ```

  We can use this operator for setting the default value.

  ```ts
  const x = null;

  console.log((x ?? 1) + 10);
  ```

  So, the nullish coalescing (??) operator is useful to handle null or undefined values to avoid unexpected operations on them.

### **3. How do you handle asynchronous operations in TypeScript, and what are the advantages of using async/await over callbacks or Promises?.**

Using `async/await` is introduced in ES6, because, it's to complecated and difficult to handle while too many nested asynchronous operations. `async/await` is more simpler and look like synchronous code but nested callbacks make `callback hell` issue which is difficult to debug.

```ts
const fetchData = async () => {
  const res = await fetch(...);
  return res;
}
```

This is very simple async/await function to handle asynchronous operation without typescript.
Using typescript we should ensure type-safety and return type of the asynchronous function. To create a `Promise` from a function, then we should write return promise type.

```ts
const createPromise = (): Promise<string> => {
  return new Promise((resolve, rejected) => {
    const data = "data...";

    if (data) resolve(data);
    else {
      rejected("Error!");
    }
  });
};
```

This example we create a function which is return a promise with resolve, and declare the return type is `Promise` with type.

```ts
const getData = async (): Promise<string> => {
  try {
    const data = await createPromise();
    return data;
  } catch (error) {
    return error.message;
  }
};
```

Handle promise using async/await is simple and using try/catch for error handle. Inside the try block, using await which is expected to return a string when resolved. If any error happend during asynchronous operation then our code jumps to the catch block to handle error and return the error message. This is the simple structure to handle asynchronous operations in TypeScript.

### **4. How can you use TypeScript's enums, and what are their advantages?.**

`enum` is a set of named values where it represents constants/options/categories. If an application uses a few categories repeatedly, it is good to store them in a central place and use them. `enum` plays a similar role in keeping these values into it, and uses throughout the enum.

```ts
enum Weekday {
  Friday,
  Saturday,
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
}
```

This enum represents the days of the week, with each day having a numeric value starting from 0. We can use the enum values using the numeric value.

```ts
console.log(Weekday[2]); // Sunday
```

We can use enum like this

```ts
type Task = {
  taskName: string;
  taskProgress: number;
  difficulty: string;
  startDay: Weekday;
  deadline: Weekday;
};

const myTask: Task = {
  taskName: "Complete TypeScript",
  taskProgress: 70,
  difficulty: "Intermediate",
  startDay: Weekday.Friday, // 0
  deadline: Weekday.Sunday, // 2
};
```

Now, enum helps us to code becomes more readable and it will give errors at compile time if try to use an invalid value.

### **5. Explain the role of type guards in TypeScript and provide an example of a custom type guard.**

`type guard` is a technique where we ensure that our provided value type is doing expected operations. It is useful for some cases, such as if a function receives a argument type is `unknown` then we use type guard before doing any operation on it. Otherwise, string operation causes error for number value and vice versa.

- **type guaard using typeof**
  typeof operator is very useful for type guard because it checks the argument value's type to make the right decision on which type for which operation.

  ```ts
  const square = (a: unknown): number => {
    if (typeof a === "number") return a * a;
    else if (typeof a === "string") return Number(a) * Number(a);
    else return 0;
  };

  console.log(square("5")); // 25
  ```

  typeof perform as a type guard, otherwise it causes error for other type and it for `primitive` types.<br><br>

- **type guaard using in**
  for an object type checking there is another type guard is `in`, it checks a property is in inside an object or not.

  ```ts
  type Student = {
    name: string;
    id: string;
    cgpa: number;
  };

  type Teacher = {
    name: string;
    id: string;
  };

  const login = (user: Student | Teacher): void => {
    if ("cgpa" in user) {
      console.log("Login to the student dashboard");
    } else {
      console.log("Login to the teacher dashboard");
    }
  };
  ```

  In this example, if we need to check an object's property and then perform some operation then use `in` as type guard.<br><br>

- **type guaard using instanceof**

  `typeof `is used for primitive types, `in` is used for object's property checking and now there is another situation in which we need to check whether an object is created from some specific class or not. To check whether an instance of a class which is actually an object is inherit from a class or not then a new type guard is useful which is `instanceof`; Lets see an example.

  ```ts
  class Human {
    name: string;
    gender: string;

    constructor(name: string, gender: string) {
      this.name = name;
      this.gender = gender;
    }

    doSomething() {
      console.log("Do Something");
    }
  }

  // child class of Human
  class Man extends Human {
    constructor(name: string, gender: string) {
      super(name, gender);
    }

    manSpecificWork() {
      console.log("Do man's specific work...");
    }
  }

  // child class of Human
  class Woman extends Human {
    constructor(name: string, gender: string) {
      super(name, gender);
    }

    womanSpecificWork() {
      console.log("Do woman's specific work...");
    }
  }
  ```

  There is three classes where `Man` and `Woman` are child class of `Human` class. Now, if we create a function which takes a parameter which type is `Human` then we can pass it's child class object also, but child class has it's own method and we can't call any method without checking the argument object's type, because there is possibility to pass `Man` class object or `Woman` class object but how can we call `Men` class method without checking is argument's object is belong to `Man` class or not. Otherwise `Woman` class object try to call `Man` class method which causes error.<br><br>

  We have to check if the object is belong to the `Man` class or `Woman` class, and a new type guard `instanceof` is usefull in this case. `instanceof` simply checks if the object is actually instance of a specific class or not.

  ```ts
  const doWork = (human: Human): void => {
    if (human instanceof Man) {
      human.manSpecificWork(); // Man class specific method
    } else if (human instanceof Woman) {
      human.manSpecificWork(); // Woman class specific method
    } else {
      human.doSomething(); // Human class specific method
    }
  };
  ```

### **6. Can you give an example of how to use "readonly" properties in TypeScript?**

`readonly` is an access modifier for object type, which is ensures a property is readonly means we can only read the property value and can't mutate or insert new value.

```ts
type Person = {
  readonly name: string;
  readonly email: string;
  address: string;
};

const user1: Person = {
  name: "Adnan",
  email: "demo@gmail.com",
  address: "UK",
};
```

Now, we can update the address property of the user1 object, but we can't update the name & email property because of readonly. After creating an object, we can only access that readonly property's value instead of update.

```ts
user1.name = "Sarkar"; // not allowed
```

We can also use this readonly access modifier in `class` & `interface` because all of them are for creating an object.

### **7. Explain what a union type is in TypeScript and provide an example of its usage.**

`union` type is typescript's own type, which is create a custome type with multiple types. So, we can use multiple types to create a new type.
from exmple, We need a type which is allow to a value as a number or as a string.

```ts
type NumberOrString = number | string; // | is union type

const num: NumberOrString = 12;
const str: NumberOrString = "Nice";
```

Now, I can use my custom type `NumberOrString` for number or string.
It is useful when we try to union two object types.

```ts
type CustomObj = { name: string } | { age: number };
```

`CustomObj` is a new type but what type value we can store? union type means `or`, So we can value it as an object which can hold first object type or second object type or both object type.

```ts
const user: CustomObj = { name: "Adnan" }; // okk
const user: CustomObj = { age: 55 }; // okk
const user: CustomObj = { name: "Adnan", age: 55 }; // okk
```

But we can't use any object that is missing any object type property then it doesn't allow us to store that type of object.
