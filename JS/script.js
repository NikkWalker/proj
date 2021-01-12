/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

const numberOfFilms = +prompt("How many movies you had seen?", "");
console.log(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms, 
    movies:{}, 
    actors:{},
    genres:[],
    private: false
};

const a = prompt("One of the recently seen fims?", ""),
      b = prompt("Please rate it", "From 0 to 10"),
      c = prompt("One of the recently seen fims?", ""),
      d = prompt("Please rate it", "From 0 to 10");

// personalMovieDB.movies = recentMovie + ": " + movRate;
// alert(personalMovieDB.movies);
// console.log(personalMovieDB);

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);
