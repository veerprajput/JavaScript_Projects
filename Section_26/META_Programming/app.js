// Library land
const uid = Symbol();
console.log(uid);

const user = {
  [uid]: 'p1',
  name: 'Max',
  age: 30,
  [Symbol.toStringTag]: 'User',
};

user[uid] = 'p3';

const company = {
  // curEmployee: 0,
  employees: ['Max', 'Manu', 'Anna'],
  // next() {
  //   if (this.curEmployee >= this.employees.length) {
  //     return { value: this.curEmployee, done: true };
  //   }
  //   const returnValue = {
  //     value: this.employees[this.curEmployee],
  //     done: false
  //   };
  //   this.curEmployee++;
  //   return returnValue;
  // },
  [Symbol.iterator]: function* employeeGenerator() {
    let currentEmployee = 0;
    while (currentEmployee < this.employees.length) {
      yield this.employees[currentEmployee];
      currentEmployee++;
    }
  },
};

for (const employee of company) {
  console.log(employee);
}

console.log([...company]);

// const it = company.getEmployee();

// console.log(it.next());
// console.log(it.next());

const persons = ['Max', 'Manu'];
console.log(persons);

// ---

const course = {
  title: 'JavaScript - The Complete Guide',
};

Reflect.setPrototypeOf(course, {
  toString() {
    return this.title;
  },
});

// Reflect.deleteProperty(course, 'title');

console.log(course);

// App land

user.id = 'p2';

console.log(user[Symbol('uid')]);
console.log(Symbol('uid') === Symbol('uid'));
console.log(user.toString());

const courseHandler = {
  get(obj, propertyName) {
    console.log(propertyName);
    return obj[propertyName];
  },
};
const proxyCourse = new Proxy(course, courseHandler);
console.log(proxyCourse.title);


