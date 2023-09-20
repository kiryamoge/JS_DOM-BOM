//Задание 1
//Описать в html тег input и тег ul. По нажатию на клавишу в инпуте в список ul должен добавляться элемент li. Содержимое li - нажатая клавиша.

    const inputOne = document.getElementById('inputOne');
    const list = document.getElementById('list');
    inputOne.addEventListener('keydown', (event) => {
      const key = event.key; 
        const listItem = document.createElement('li');
        listItem.textContent = key;
        list.appendChild(listItem);
    })


//Задание 2
//Вставить в html тег input (просто предусмотреть в разметке).  
//Обрабатывая событие keyup на теге input, выводить в консоль введенный текст каждый раз, как только клиент вписывает любой символ в поле (или стирает любой символ из поля). Вам понадобится считывать значение поля, это input.value

const inputTwo = document.getElementById('inputTwo');
//console.log(inputTwo);
    inputTwo.addEventListener('keyup', (event) => {
      const text = inputTwo.value;
      console.log(text);
    });


//Задание 3
//Создать в html форму с инпутом и кнопкой. Также добавить в html тег ul. Когда форма отправляется, добавлять в список тег li. Его содержимое - введенный текст (input.value). После отправки формы инпут должен быть очищен (проставить пустую строку в value).   

const form = document.getElementById('myForm');
const input = document.getElementById('textInput');
const listOne = document.getElementById('listOne');
form.addEventListener('submit', function(event) {
  event.preventDefault(); 
  const text = input.value.trim(); 
  if (text !== ''){
    const listItem = document.createElement('li');
    listItem.textContent = text;
    listOne.appendChild(listItem);
    input.value = ''; 
  }
});


//Задание 4
//Калькулятор. 
//Создать в html форму с текстовым input, тегом select, вторым текстовым input и кнопкой. Добавить в html div. Внутри select будут options - арифметические знаки. В оба //инпута пользователь вводит число. Когда пользователь отправляет форму (событие submit), над двумя числами выполняется действие, выбранное в select (чтобы получить выбранный пользователем option, мы "забираем" значение  select.value). Результат отображается в div.
//1) решить с помощью if
//2) решить с помощью evel 

    const twoForm = document.getElementById('twoForm');
    const numOneInput = document.getElementById('numOne');
    const numTwoInput = document.getElementById('numTwo');
    const operationSelect = document.getElementById('operation');
    const resultDiv = document.getElementById('result');
      twoForm.addEventListener('submit', (event) => {
      event.preventDefault(); 
      const numOne = Number(numOneInput.value);
      const numTwo = Number(numTwoInput.value);
      const operation = operationSelect.value;
      if (operation === '+'){
        result = numOne + numTwo;
      } else if (operation === '-'){
        result = numOne - numTwo;
      } else if (operation === '*'){
        result = numOne * numTwo;
      } else if (operation === '/'){
        result = numOne / numTwo;
      }
      // eval
       //const expression = `${numOne} ${operation} ${numTwo}`;
      // result = eval(expression);
      console.log(resultDiv.textContent = `Результат: ${result}`);
    });

//Задание 5
//Вставить в разметку html тег button без js (просто предусмотреть в разметке). При наведении на кнопку изменять ее цвет каждый раз рандомным цветом. При выведении мышки за пределы кнопки поворачивать кнопку на рандомный угол от -180 до 180 градусов. Использовать обработку событий mouseenter, mouseleave на этой кнопке.

const buyButton = document.getElementById('buy');
console.log(buyButton);

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; 
  }
buyButton.addEventListener('mouseover', () => {
    buyButton.style.borderRadius = `${getRandomInt(0,40)}px`
})
buyButton.addEventListener('mouseleave', () => {
  buyButton.style.transform = `rotate(${getRandomInt(-180,180)}deg`
})
buyButton.addEventListener('mouseenter', () => {
  buyButton.style.backgroundColor = `rgb(${getRandomInt(0,255)}, ${getRandomInt(0,255)}, ${getRandomInt(0,255)})`
})
