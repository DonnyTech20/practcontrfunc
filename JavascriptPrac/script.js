// Function constructor


/*const Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
};

Person.prototype.calculateAge = () => {
 console.log(2019 - this.yearOfBirth);
};

Person.prototype.lastName = 'Tech';

let don = new Person ('Don', 1935, 'Instructor');
let caroline = new Person('Caro', 1985, 'MD');
let junior = new Person('Junior', 1995, 'Chemist');

don.calculateAge();
caroline.calculateAge();
junior.calculateAge();

console.log(don.lastName);
console.log(caro.lastName);
console.log(junior.lastName);
*/







// Primitives Variables

/* let a = 23;
let b = a;
a = 40;
console.log(a);
console.log(b);

// Objects Variables

let obj = {
    name: 'Don',
    age: 25
};
let obj2 = obj;
obj.age = 30;
console.log(obj.age);
console.log(obj2.age);
*/



// Functions 

/* let years = [1975, 1965, 1937, 2005, 1998];

 arrayCalc = (arr, fn) => {
     let arrRes = [];
     for (let i = 0; i < arr.length;
        i++) {
            arrRes.push(fn(arr[i]));
            console.log(i);
        }
        return arrRes;
 }
 calculateAge = (el) => {
     return 2019 - el;
 }
 let ages = arrayCalc(years, calculateAge);

 console.log(ages);
 */

 // Function calling another Function

 interviewQuestion = (job) => {
if (job === 'web developer') {
    return (name) => {
     console.log(` ${name} Please explain what is Javascipt`);
    }
} else if (job === 'UI designer') {
    return (name) => {
        console.log(` ${name} What is SASS ?`);
    }
} else {
    return (name) => {
        console.log(` ${name} whats your career ? `);
    }
}
 }
 let webDeveloperQuestion = interviewQuestion('web developer');

 webDeveloperQuestion('Donny Techiera');
 
































