// ==========================
// 1. Basic Types
// ==========================
const y: string = "hello";
let z: boolean = true;
let arr1: any[] = [1, "hhh", true];   // array من أي نوع
let arr: number[] = [1, 2, 3];        // array من أرقام
let x: number = 10;

let p: any = 10; 
p = "hello"; 
p = true;

// ==========================
// 2. Tuple
// ==========================
let tupleExample: [number, string, boolean] = [10, "hello", true];
// tuple = array بعناصر أنواعها ثابتة بترتيب معين

// ==========================
// 3. Objects
// ==========================
let obj: object = { name: "ahmed", age: 30 };

// ==========================
// 4. Union Types
// ==========================
let mix: (string | number)[] = [1, "hello", 2, "hi"];

// ==========================
// 5. Functions
// ==========================
const w = () => {
  console.log("arrow function");  
};

const o: (n: number, m: number) => number = (n, m) => {
  return n + m;
};

// ==========================
// 6. Interfaces
// ==========================
interface Person {
  name: string;
  age: number;
  job?: string; // optional property
}

const person1: Person = { name: "ali", age: 20 };
const person2: Person = { name: "mona", age: 25, job: "developer" };

// ==========================
// 7. Types
// ==========================
type myType = string | number;
let a: myType = 10;
a = "hello";

type myType2 = { name: string; age: number };
let person3: myType2 = { name: "ali", age: 20 };

// ==========================
// 8. Nullish Coalescing Operator
// ==========================
const myage: number = person1.age ?? 18;
const myjob: string = person1.job ?? "unemployed";

// ==========================
// 9. Enums
// ==========================
export enum bookingStatus {
  initial, // 0
  in,      // 1
  out      // 2
}

enum bookingStatus2 {
    initial = "initial",
    in = "in",
    out = "out"
}

let myStatus: bookingStatus = bookingStatus.initial;  // 0
let myStatus2: bookingStatus2 = bookingStatus2.in;   // "in"

// ==========================
// 10. Classes + Interfaces
// ==========================
interface ICar {
    sayHello: () => void;
}

class Car implements ICar {
    readonly model: string;  // readonly → مينفعش يتغير
    private year: number;    // private → متاح داخل الكلاس بس

    constructor(model: string, year: number) {
        this.model = model;
        this.year = year;
    }

    sayHello(): void {
        console.log(`hello from ${this.model} - ${this.year}`);
    }
}

const car1 = new Car("bmw", 2020);
car1.sayHello();

const car2 = new Car("mercedes", 2021);
car2.sayHello();

// ==========================
// 11. Generics
// ==========================
const sum = <T>(n1: T, n2: number): T => {     // T → any type
    const n: T = n1;
    return n1;
};

sum<string>("hello", 2);
sum<number>(10, 2);

// ==========================
// 12. Extra Concepts
// ==========================

// Abstract Class → blueprint class
abstract class Animal {
    abstract makeSound(): void; // لازم الكلاسات اللي تورّثها تنفذها
    move(): void {
        console.log("Moving...");
    }
}

class Dog extends Animal {
    makeSound(): void {
        console.log("Woof!");
    }
}

const d = new Dog();
d.makeSound(); // Woof!

d.move();      // Moving...


// ==========================
// 13. general object type
// ==========================

// 1) تعريف object باستخدام interface
interface Person {
    //name: string;
    //age: number;
    [key: string]: any; // index signature

}
const obj1: Person = { name: "ahmed", age: 30 }; 

// 2) تعريف object باستخدام inline type annotation
const obj2: { name: string; age: number } = { name: "ahmed", age: 30 };

// 3) تعريف object عام باستخدام index signature
const obj3: { [key: string]: any } = { name: "ahmed", age: 30, address: "cairo" };

// ==========================
// 13. TypeScript Utilities
// ==========================

// 1) الأساسيات
interface User {
    name: string;
    email: string;
    age?: number;   // اختياري
    password: string;
}

interface Car {
    carName: string;
    modelYear: number;
}


// ==========================
// 14) Utility Types
// ==========================

// Omit: حذف خاصية معينة
interface UserWithoutPassword extends Omit<User, "password"> {}
const user: UserWithoutPassword = { 
    name: "Ali", 
    email: "gga@gg", 
    age: 20 
};

// Pick: اختيار خصائص معينة
interface UserEmailAndName extends Pick<User, "name" | "email"> {}
const user2: UserEmailAndName = { 
    name: "Ali", 
    email: "gga@gg" 
};

// Partial: يجعل كل الخصائص اختيارية
interface UserPartial extends Partial<User> {}
const user3: UserPartial = {  
    password: "12345"  // ممكن خاصية واحدة أو ولا واحدة
};

// Required: يجعل كل الخصائص إجبارية
interface UserRequired extends Required<User> {}
const user4: UserRequired = { 
    name: "Ali", 
    email: "gga@gg", 
    age: 20, 
    password: "12345" 
};

// 2) مثال: Combine utilities مع extends
interface Employee extends Partial<User>, Required<Car> {}
type pr =Person & Car;


// ===============================
// 15) promisses with typescript
// ===============================

// 1) async function returning a string 
const myfunction = async () => {
    return "data from server";
};
// 2) promise returning a string
const result =() =>{
    return new Promise<string>((resolve, reject) => {
        resolve("data from server");
    });
};
const x1 =myfunction();
const x2 =result();

