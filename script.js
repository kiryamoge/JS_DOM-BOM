// Задание 1
// Задать массив имен. Создать 2 переменные, которые будут хранить первых 2 имени, вывести их в консоль. Создать массив, который будет хранить остальные имена, вывести имена из него по одному в консоль. Если кол-во элементов массива меньше 2, то вторая переменная должна стать равна "alex".

const names = ['Олег', 'Иван', 'Игорь', 'Саша', 'Миша'];

const [firstName, secondName] = names;
console.log(firstName, secondName);

const otherNames = names.slice(2);

otherNames.forEach((name) => {
  console.log(name);
});

if (names.length < 2) {
  secondName = 'alex';
}

console.log(secondName);


// Задание 2
// Задать массив имен. Задать функцию, которая принимает 3 параметра и выводит их в консоль. Передать массив в функцию. Внутри функции каждый параметр должен быть равен одному из элементов массива.

const namesTwo = ['Оля', 'Юля', 'Яна'];

 printNames = (param1, param2, param3) => {
  console.log(param1);
  console.log(param2);
  console.log(param3);
}

printNames(...namesTwo);


// Задание 3
// Задать объект с N полей. Создать 2 переменные, которые будут называться так же, как поля, и хранить 2 значения полей объекта. Если соответствующих полей в объекте нет, задать значения чисел 1 и 2. Все остальные поля объекта записать в переменную fields.

const obj = {
    field1: 'Value 1',
    field2: 'Value 2',
    field3: 'Value 3',
    field4: 'Value 4'
  };
  
  let { field1, field2 } = obj;
  
  if (!field1) {
    field1 = 1;
  }
  
  if (!field2) {
    field2 = 2;
  }
  
  const fields = { ...obj };
  delete fields.field1;
  delete fields.field2;
  
  console.log(field1);
  console.log(field2);
  console.log(fields);
