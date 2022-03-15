// //* BASE CLASS
// class Person {
//   constructor(age = 22) {
//     this.age = age;
//     this.fears = ["Spiders", "Monkeys"];
//   }
//   lifeExpectancy() {
//     const targetYears = 79;
//     return targetYears - this.age;
//   }

//   saveDetails() {
//     // SAVES ANY OBJECT CREATED FROM THE PERSON CLASS TO A DATABASE
//     console.log(`Data saved to DB`);
//   }

//   callFears() {
//     return this.fears.join();
//   }
// }

// //* SUPER CLASS

// class Student extends Person {
//   constructor(...subjectsStudied) {
//     super();
//     this.subjectsStudied = subjectsStudied;
//     // this.fears = ["Pandas", secondFear]; //*Overwrites set fears prop from parent
//   }
//   /*  callFears() {
//     return `My fears are now 2 ${this.fears}`;
//   } */ //* Overwrites callFears Method from parent

//   subjectsStudied() {
//     return "English and Maths";
//   }
// }

// // console.log("Call for Student Fears", new Student().callFears());

// //* SUB CLASS
// class Employee extends Student {
//   constructor(salary, subjectsStudied) {
//     super(subjectsStudied);
//     this.salary = salary;
//   }

//   saveDetails() {
//     console.log(`Employee Data with new salary prop saved to Students DB`);
//   }
// }

// const Danny = new Student("French", "Ga", "Twi");
// const Kwesi = new Employee(2000, "Maths", "French");

// Kwesi.saveDetails();
// Danny.saveDetails();

// // console.log(
// //   "some other Emplooyee",
// //   new Employee(4400, "Maths", "French").callFears()
// // );

// function SuperHero(level) {
//   this.level = level;
// }

// SuperHero.prototype = new Person();

// let sam = new SuperHero();

// // console.log(sam.callFears());

// const secretKey = 1889;

// const sayHello = () => {
//   const secretKey = 2999;

//   return (employeeSalary) => {
//     const secretKey = 4990;
//     return {
//       ...new Employee(employeeSalary),
//       secretKey,
//     };
//   };
// };
// const FirstEmployee = sayHello()(2400);

// for (let item in FirstEmployee) {
//   console.log(item);
//   if (item === "salary") console.log("First Employee,", FirstEmployee[item]);
// }

// let score = 0;

// let newScore = score++;
// console.log(newScore);

// const mixed = [2, 34, 56, 7, 20, 20000, 1];

//*Algorithm
const bubbleSort = (unsorted) => {
  for (let i = 0; i < unsorted.length - 1; i++) {
    // number of scans loop
    for (let j = 0; j < unsorted.length - 1; j++) {
      // compare value size loop
      if (unsorted[j] > unsorted[j + 1]) {
        let ref = unsorted[j];
        unsorted[j] = unsorted[j + 1];
        unsorted[j + 1] = ref;
      } else continue;
    }
  }
  return unsorted;
};

// console.log(bubbleSort(mixed));

const userName = "Kw e ku L ou i s";
const Fruits = ["Apples", "Oranges", "Pawpaw"];

let ourFinalString = "";

for (let i = 0; i < Fruits.length; i++) {
  ourFinalString += Fruits[i];
}

// console.log(typeof ourFinalString);

const fruitsString = Fruits.join("******");
console.log(fruitsString);

// console.log(typeof userName.split(" "));

var age = 20;
var remainingYearsToMarry = 10;
var yearsToMarry;

// console.log(typeof yearsToMarry);

// console.log(age);

// typeof age;
// console.log(2 * 4);
// console.log("hello");
