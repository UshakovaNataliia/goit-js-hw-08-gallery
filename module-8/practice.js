// "use strict"
// // import pokemon from "./pokemons.js"

// let body = document.querySelector("body");


// // body.style.margin = '0 auto';


// let box = document.createElement("div");
// body.append(box);


// // box.style.margin = '0 auto';
// // body.append(img);
// // let img = document.createElement('img');
// // ______________STYLES
// // box.style.width = "50px"
// // box.style.height = "50px"
// // box.style.backgroundColor = "orange"
// // box.style.margin = "0 auto"



// box.setAttribute("class", "box");




// // box.style.margin = '0 auto';
// // img.setAttribute('src', './racoon.webp');
// // img.setAttribute('alt', 'racoon');
// // box.setAttribute('class', 'bluebox');
// // box.classList.add('box', 'box2');
// // box.classList.remove('box2');



// for (let i = 0; i < 20; i++) {
// 	let smallBox = document.createElement("div");
//     box.append(smallBox);
//     box.style.margin = '0 auto';
//     smallBox.classList.add("smallBox");
//     smallBox.style.width = '40px';
//     smallBox.style.height = '40px';
//     smallBox.style.display = 'inline-block';
//     smallBox.style.marginRight = '20px';
//     smallBox.style.borderRadius = '50%';
    
// setInterval(() => {
//     smallBox.style.backgroundColor = 
//     `rgb(${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255,)},${Math.round(Math.random() * 255)} )`;
// }, 1000);
// }




// 03.08

// 1. два квадратика с цифрами 1 и 2, поменять местами цифры
// при нажатии меняются местами цифры


// let body = document.querySelector('body');

// body.innerHTML = '<p class="first">1</p><p class="second">2</p>';

// console.log(body);
// first.textContent = 1;
// second.textContent = 2;


// // first.textContent.addEventListener('click', ()=> {first.textContent==1 ? first.textContent=2 && second.textContent=1 : first.textContent=1 && second.textContent=2});

// // console.log();

// first.addEventListener('click', () => {
//     if(first.textContent==1) {
//         first.textContent=2;
//         second.textContent=1; 
//     } else {
//         first.textContent=1; 
//         second.textContent=2;
//     }
// });


// 2. Сделайте текстовый инпут который принимает значение цвета 
// и меняет цвет бекграунда для body







//3. При нажатии на кнопку создаётся квадрат, при изменение инпута (range) - 
// меняется его размер (размер грани должен быть больше 100 пикселей).
// При нажатии на вторую кнопку - квадрат удаляется








// 04/08
/*
 1. Напишите скрипт который реализует следующий функционал.
  
  Есть кнопка с классом button, текст которой отображает 
  кол-во раз которое по ней кликнули, обновляется при каждом клике.
*/
// const button = document.querySelector('.button');
// let sum = 0;
// button.addEventListener("click", () => {
//   sum+=1;
//   button.textContent=sum;
// });



// 2.
/*
  Даны 2 инпута, абзац и кнопка. По нажатию на кнопку получите числа, 
  которые будут введены в инпуты и запишите их сумму в span.result.
*/
// const firstInput = document.querySelector('.first');
// const secondInput = document.querySelector('.second');
// const result = document.querySelector('.result');
// const button = document.querySelector('button');
// button.addEventListener('click', () => {
//   result.textContent = Number(firstInput.value)+Number(secondInput.value);
// })



/*
  3. Есть форма с набором радиокнопок. Пользователь выбирает вариант ответа, 
  после чего нажимает кнопку "Submit" и происходит отправка формы.
  
  При отправке формы:
    - не должна перезагружаться страница
    - необходимо получить выбранную опцию и вывести в параграф с классом .result
*/



// 5/08

/* 1
  Дан список изображений. Сделайте так, чтобы по клику на картинку 
  алертом выводился ее src. Обязательно используйте делегирование событий.
*/
// https://picsum.photos/

// https://picsum.photos/id/237/200/300

// let container = document.querySelector('.img');
// console.log(container);

// function show (evt) {
//   console.log(evt.target.src, evt.target.alt);
// }
// container.addEventListener('click', show)







// let gallery = document.querySelector('.gallery')
// console.log(gallery);
// for(let i=0; i<5; i+=1){
//   gallery.innerHTML += `<li><img src='https://picsum.photos/id/${i}/200/300'></li>`;
// }
// // li.style.marginRight = '20px';
// gallery.addEventListener('click', (e) => {
//   if(e.target.nodeName === 'IMG'){
//     alert(e.target.src);
//   }
// });










/*2
  Дан ul, а внутри него произвольное количество li с текстом и кнопкой. 
  Сделайте так, чтобы по нажатию на кнопку, удалялся тот li в котором
  она находится. Обязательно используйте делегирование событий.
*/


// let div = document.querySelector('.list');
// console.log(div);

// let btn = div.querySelectorAll('button[data-action = 'delete']');
// console.log(btn);

// let li = div.querySelectorAll('li');
// console.log(li);

// function deleteLi(event){
// if(event.target.nodeName === 'BUTTON'){

// }
// }



// 3  
// Дан набор инпутов. Сделайте так, чтобы при потере фокуса все 
  // инпуты проверяли свое содержимое на правильное количество символов. 
  
  // - Сколько символов должно быть в инпуте, указывается в атрибуте data-length. 
  // - Если введено подходящее количество, то outline инпута становится зеленым, 
  //   если неправильное - красным. Для добавления стилей, на вкладке CSS есть стили valid и invalid

