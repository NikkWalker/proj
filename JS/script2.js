/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

// Код возьмите из предыдущего домашнего задания



const numberOfFilms = prompt("How many movies have you seen?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt('One of viewed films', ''),
          b = prompt('How many scores?', '');
    
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}

console.log(personalMovieDB);


// const personalMovieDB = {
//     count: numberOfFilms, 
//     movies:{}, 
//     actors:{},
//     genres:[],
//     private: false
// };

// for (let i = 0; i < 3; i++) {
//     const a = prompt("One of the recently seen fims?", ""),
//           b = prompt("Please rate it", "From 0 to 10");
    
//     personalMovieDB.movies[a] = b;

//     if (a == null) {
//         const a = +prompt("How many movies you had seen?", "");
//     } else if (a == undefined) {
//         const a = +prompt("How many movies you had seen?", "");
//     } else if (a.length >= 10) {
//         const a = +prompt("How many movies you had seen?", "");
//     } else {
//         console.log(numberOfFilms);
//     }


// }
// console.log(personalMovieDB);