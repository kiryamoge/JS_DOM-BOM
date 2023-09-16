//Задание 1
//Просмотрите в консоли браузера объект navigator. Найдите информацию о своем браузере, системе.
//Просмотрите в консоли браузера объект location. Найдите в этом объекте текущий url, где вы находитесь.
//Выведите в консоль строку:
//На компьютере с ОС ... с помощью браузера ... я открыл страничку ... 
//(необходимые значения добавьте с помощью BOM)
const user = navigator.userAgent;
const platform = navigator.platform;
const link = location.href;
 console.log('На компьютере с ОС ' + platform + ' с помощью браузера ' + user + ' я открыл страничку ' + link); 

//Задание 2
//В файле html есть разметка (добавьте ее в свой файл html):
//<ul id="list">
//<li>Джон</li>
//<li>Пит</li>
//<li>Джессика</li>
//<li>Сара</li>
//</ul>
//2.1. Вывести в консоль каждое из имен (содержимое каждого li).
//2.2. Поменять имена в списке выше на числа от 0 по порядку (0, 1, 2 и т.д.)

const list = document.querySelectorAll('#list li');
console.log(list);
for (let i = 0; i < list.length; i++) {
  list[i].textContent = i;
  console.log(list[i].textContent);
}
//Задание 3
//Добавить к нескольким тегам на странице класс "forRemove". Далее написать JS код, который найдет в HTML все элементы с классом "forRemove" и удалит их.
const forRemove = document.querySelectorAll('.forRemove');   
forRemove.forEach(function(elem) {
  elem.parentNode.removeChild(elem);
})


//Задание 4
//Создать с помощью js абзац (тег p). Добавить в него контент. Добавить к нему стили: размер 36px, жирный шрифт. Добавить абзац с текстом на страницу.
 const paragraph = document.createElement('p');
 paragraph.textContent = 'Lorem Ipsum является текст-заполнитель обычно используется в графических, печать и издательской индустрии для предварительного просмотра макета';
 paragraph.style.fontSize = '36px';
 paragraph.style.fontWeight = 'bold';
 document.body.append(paragraph);


//Задание 5
//Написать функцию, которая принимает на вход 3 параметра: название тега, название цвета, содержимое. Функция должна сформировать необходимый тег, добавить необходимый стиль с цветом и внести содержимое. Вывести несколько таких сгенерированных тегов в консоль, затем отправить их на страницу.

const createTag = (tagName, color, content) => {
  const tag = document.createElement(tagName);
  tag.style.color = color;
  tag.textContent = content;
  return tag;
}
const h3 = createTag('h3','green','text');
const p = createTag('p','blue',' some text');
document.body.append(createTag('h2','yellow','text'));


//Задание 6
//Вставить в страницу (в html документ) тег <select>. С помощью js (в цикле) добавить в этот select опции (option) под годы от 1960 по 2020.

const select = document.getElementById('yearSelect');
for (let year = 1960; year <= 2020; year++) {
  const option = document.createElement('option');
  option.textContent = year;
  select.append(option);
}


//Задание 7
//Вставить в страницу (в html документ) ul.
//Предусмотреть в коде следующий массив:
const clients = [
{name: "Женя", order: true},
{name: "Кристина", order: true},
{name: "Павел", order: false},
{name: "Виолетта", order: false},
{name: "Костя", order: true}
]
//Перебирать массив, для каждого элемента массива создать li, наполнить li текстом:
//- Клиент Женя оплатил заказ
//- Клиент Павел отменил заказ
//... остальные li с контентом
//Маска получается такой: "Клиент ИМЯ СТАТУС заказ", где имя - свойство объекта (а объект здесь - это текущая ячейка массива), статус зависит от от свойства order: если true – то оплатил, если false – то отменил.

clients.forEach(item => {
  const li = document.createElement('li');
  const status = item.order ? 'оплатил' : 'отменил';
  li.textContent = `клиент ${item.name} ${status} заказ`;
  document.querySelector('main ul').append(li);
})

//Задание 8
//Есть массив ссылок:

let linksArr = ['https://www.amazon.com/', 'https://www.youtube.com/', 'https://devby.io/', 'https://www.google.com/', 'https://apple.com/'];

//Вам нужно:
//1) при помощи JS создать DIV, задать ему css стили (фон, паддинги)
//2) при помощи цикла пройтись по массиву 'linksArr', для каждого из элементов массива сформировать ссылку (тег
//c атрибутом href и текстом из массива) и добавить эту ссылку в созданный DIV из пункта 1
//При нажатии на ссылки адреса должны открываться в новой вкладке (атрибут target="_blank")
//3) Добавить DIV из пункта 1 (со ссылками внутри ) в BODY

const div = document.createElement('div');
div.style.backgroundColor = 'blue';
div.style.padding = '70px';

linksArr.forEach(item => {
  const a = document.createElement('a');
  a.textContent = item;
  a.href = item;
  div.append(a);
})
document.body.append(div);


//Задание 9*
//Есть массив объектов с полями name, age. Например:
const users = [
{name: 'Mark', age: 12},
{name: 'Olga', age: 30},
{name:'Tom', age: 25},
{name:'Den', age: 43}
]
//Создать в html таблицу (table).
//C помощью js заполнить таблицу информацией из массива, в одной колонке будут имена, во второй возраст. Имена должны быть красного цвета, age - синего.
//ПОДСКАЗКА, Таблица состоит из строк (tr) и ячеек (td) внутри этих строк. Строк должно создаваться столько, сколько объектов внутри массива, и их количество может быть любым.

const table = document.querySelector('table');
users.forEach(item => {
  const tr = document.createElement('tr');
  const tdName = document.createElement('td');
  const tdAge = document.createElement('td');
  tdName.textContent = item.name;
  tdAge.textContent = item.age;
  tr.append(tdName);
  tr.append(tdAge);
  table.append(tr);
})


//Задание 10
//Есть верстка: 
//С помощью JavaScript:
//1) Найти в коде список ul и добавить ему класс “list”.
//2) На li через один (начиная с самого первого) установить класс “item”
//3) На все ссылки в примере установить класс “custom-link”

const ul = document.querySelector('ul');
ul.classList.add('list');

const liItems = document.querySelectorAll('li');
for (let i = 0; i < liItems.length; i += 2) {
  liItems[i].classList.add('item');
}

const links = document.querySelectorAll('a');
links.forEach(function(link) {
  link.classList.add('custom-link');
});
