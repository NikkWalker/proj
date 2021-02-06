/* Задания на урок:

*1) Удалить все рекламные блоки со страницы (правая часть сайта)

*2) Изменить жанр фильма, поменять "комедия" на "драма"

*3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

*4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

*5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};


// const advert = document.querySelectorAll('.promo__adv'),
const advert = document.querySelectorAll('.promo__adv img'),
      bg = document.querySelector('.promo__bg'),
      genre = bg.querySelector('.promo__genre'),
      li = document.getElementsByClassName('promo__interactive-item'),
      del = document.querySelector('.delete');


// advert[0].remove();

advert.forEach(item => {
    item.remove();
});

// advert.forEach(function (item) {
//     item.remove();
// });


genre.textContent = 'драма';

bg.style.backgroundImage = "url('img/bg.jpg')";

movieDB.movies.sort();
for (let i=0; i<movieDB.movies.length; i++) {
    li[i].innerHTML = i+1 + '. ' + movieDB.movies[i] + '<div class="delete"></div>';
}

// movieList.innerHTML = '';
// movieDB.movies.sort();
// movieDB.movies.forEach((film, i) => {
//     movieList.innerHTML += `
//     <li class="promo__interactive-item">${i+1} ${film}
//         <div class="delete"></div>
//     </li>
//     `;
// });