// JS
// - Соберите в переменные необходимые элементы: кнопку для открытия окошка, само окошко вместе с фоном, окошко без фона, кнопку закрытия окошка.
// - Повесьте обработчик клика на кнопку открытия - к окошку должен добавляться класс, в котором через CSS задана видимость блока.
// Чтобы добавить класс к DOM-элементу, используется метод element.classList.add('classname')
// - Повесьте обработчик клика на кнопку закрытия окошка - при этом должен удаляться класс, который добавляли в предыдущем обработчике.
// Чтобы удалить класс из DOM-элемента, используется метод element.classList.remove('classname')
// - Повесьте обработчик клика на глобальный объект window, чтобы реализовать закрытие окошка по клику на тёмную область. Т.к. эта область является "оболочкой" окошка, мы должны проверить, была ли именно эта область целью клика (не центральная, основная часть окошка, а именно тёмная).
// Для обращения к элементу, на который пришелся клик, можно использовать свойство объекта события -
// event.target (event - это параметр функции-обработчика события,  и его свойство target точно указывает на тот элемент, на который кликнул пользователь).

document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('popup'); // окошко 
    const popupBtn = document.getElementById('call-back'); // Копка для открытия окошка
    const popupCloseBtn = document.querySelector('.popup__close'); // Кнопка закрытия окошка

popupBtn.addEventListener('click', (element) => {
    if(element.closest('.popup-btn')) {
        document.body.popup.classList.add('popup.opened');
    }  
});

popupCloseBtn.addEventListener('click', (element) => {
    if(element.closest('.popup__close')) {
        document.body.popup.classList.remove('popup.opened');
    }
});

window.addEventListener('click', (event) => {
  if (event.target === popup) {
    document.body.popup.classList.remove('popup');
  }
});
})




