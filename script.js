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

const list = document.getElementById('list');
const items = list.getElementsByTagName('li');
for (let i = 0; i < items.length; i++) {
  items[i].textContent = i;
  console.log(items[i].textContent);
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


//Задание 6
//Вставить в страницу (в html документ) тег <select>. С помощью js (в цикле) добавить в этот select опции (option) под годы от 1960 по 2020.

const select = document.getElementById('yearSelect');
for (let year = 1960; year <= 2020; year++) {
  const option = document.createElement('option');
  option.text = year;
  option.value = year;
  select.add(option);
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

const creatDiv = document.createElement('div');
creatDiv.style.backgroundColor = 'blue';
creatDiv.style.padding = '70px';

linksArr.forEach(item => {
  linksArr.href = item;
  linksArr.setAttribute('target', '_blank');
})

