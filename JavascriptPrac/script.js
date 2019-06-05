// Function constructor


const Person = function(name, yearOfBirth, job) {
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



