import data from './data.js';
import get from './getElement.js';
data.forEach((person) => console.log(person));
// people.map((person) => console.log(person));
// const lol = people.filter((person) => person.age > 40);
// console.log(lol);
// const lol = people.find((person) => person.job === 'ceo');
// console.log(lol);
// const result = people.reduce(
//   (acc, curr) => {
//     acc.sum += curr.salary;
//     return acc;
//   },
//   { sum: 100 }
// );
// console.log(result);
// localStorage.setItem('people', JSON.stringify(people));
// const response = JSON.parse(localStorage.getItem('people')).map((person) => {
//   const element = document.createElement('h1');
//   element.innerHTML = person.name;
//   document.body.appendChild(element);
// });
// console.log(response);

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   sayHello() {
//     console.log(`Hello ${this.name}, you are ${this.age} years old`);
//   }
// }

// const kuba = new Person('kuba', 26);
// kuba.sayHello();

const first = get('.first');
const second = get('.second');
const divs = document.querySelectorAll('.div');
[...divs].map((item) => {
  item.addEventListener('mousemove', (e) => {
    alert.style.display = 'block';
    alert.style.top = `${window.event.clientY + 5}px`;
    alert.style.left = `${window.event.clientX + 5}px`;
    alert.innerHTML = `<div><p>width:${e.target.clientWidth}px</p><p>height:${e.target.clientHeight}px</p><div>`;
  });
  item.addEventListener('mouseleave', () => {
    alert.style.display = 'none';
  });
});
const alert = get('.alert');
alert.style.display = 'none';

const changeColor = async () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      first.style.backgroundColor = 'yellow';
      resolve(true);
    }, 2000);
  });
  promise.then((resp) =>
    setTimeout(() => {
      second.style.backgroundColor = 'green';
    }, 2000)
  );
};
changeColor();

first.setAttribute('data-id', 1);
console.log(Number(first.getAttribute('data-id')));

const cards = document.querySelectorAll('.card');

[...cards].map((card) => {
  card.addEventListener('mouseover', () => {
    console.log(card.getAttribute('data-id'));
    card.style.zIndex = 1;
    card.style.scale = 1.1;
  });
  card.addEventListener('mouseleave', () => {
    console.log(card.getAttribute('data-id'));
    card.style.zIndex = 0;
    card.style.scale = 1;
  });
});

let mode = true;
const main = document.querySelector('.main');
const switchEl = document.querySelector('.switch');
const switchWr = document.querySelector('.switch-wrapper');
switchEl.addEventListener('click', () => {
  if (mode) {
    mode = false;
    switchEl.style.transform = 'translateX(100%)';
    main.style.backgroundColor = '#2c2c2c';
    switchWr.style.backgroundColor = '#dbdbdb';
    switchEl.style.backgroundColor = '#2c2c2c';
    // main.style.color = 'white';
    [...cards].map((card) => (card.style.color = 'white'));
  } else {
    mode = true;
    switchEl.style.transform = 'translateX(0)';
    main.style.backgroundColor = '#dbdbdb';
    switchWr.style.backgroundColor = '#2c2c2c';
    switchEl.style.backgroundColor = '#dbdbdb';
    [...cards].map((card) => (card.style.color = 'black'));
  }
});
