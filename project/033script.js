/* Задания на урок:

*1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

*2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

*3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    const advert = document.querySelectorAll('.promo__adv img'),
          bg = document.querySelector('.promo__bg'),
          genre = bg.querySelector('.promo__genre'),
          li = document.querySelector('.promo__interactive-list'),
          addForm = document.querySelector('form.add'),
          addInput = addForm.querySelector('.adding__input'),
          checkbox = addForm.querySelector('[type="checkbox"]');
    //       add = document.querySelector('.adding__input'),
    //       btn = document.querySelector('button');
    // let del = document.querySelectorAll('.delete'),
    //     liStr = document.querySelectorAll('.promo__interactive-item'),
    //     addInput = addForm
    //     check = document.querySelector('[type="checkbox"');
        
    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let newFilm = addInput.value;
        const favorite = checkbox.checked;

        if(newFilm) {

            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0,22)}...`;
            }

            if (favorite) {
                console.log("favorie movie added");
            }
            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
    
            createMovieList(movieDB.movies, li);
        }


        event.target.reset();

    });
    
    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };

    const makeChanges = () => {
        genre.textContent = 'драма';
    
        bg.style.backgroundImage = "url('img/bg.jpg')";
    };
    
    makeChanges();

    const sortArr = (arr) => {
        arr.sort();
    };

    let a = '';
    
    const reloadList = function() {
    li.innerHTML = '';
    movieDB.movies.sort();
    movieDB.movies.forEach((film, i) => {
        li.innerHTML += `
        <li class="promo__interactive-item">${i+1} ${film}
            <div class="delete"></div>
        </li>
        `;
    });
    };

    function createMovieList(films, parent) {
        parent.innerHTML = '';

        sortArr(films);
        films.forEach((film, i) => {
            parent.innerHTML += `
            <li class="promo__interactive-item">${i+1} ${film}
                <div class="delete"></div>
            </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                createMovieList(films, parent);
            });
        });
    }

deleteAdv(advert);
makeChanges();
createMovieList(movieDB.movies, li);
});

// Возьмите свой код из предыдущей практики



// reloadList();

// btn.addEventListener('click', (eventAdd) => {
//     eventAdd.preventDefault();
//     a = add.value;
//     let newFilm = a.slice(0, 1).toUpperCase() + a.slice(1);

//     if (newFilm.length > 21) {
//         newFilm = newFilm.slice(0,22) + '...';
//     }
    
//     movieDB.movies.push(newFilm);
//     movieDB.movies.sort();
//     reloadList();
//     // del = document.querySelectorAll('.delete');

//     if ()
// });

// document.querySelectorAll('.delete').forEach((btn, i) => {
//     btn.addEventListener('click', () => {
//         btn.parentElement.remove();
//         movieDB.movies.splice(i, 1);
//     });
// });

// del.forEach((e) => {
//     e.onclick = function() {
//         console.log("it's pressed");
//     //   this.parentElement.children.remove();
//     };
//   });

// let delArr = [];
// delArr = Array.from(del);

// let removeMov = function() {
//     let a = this.
// };

// del.forEach(item => {
//     del[0].addEventListener('click', () => {
//         console.log(222);
//     });
// });


// for (let i = 0; i<movieDB.movies.length; i++) {
//     del[i].addEventListener('click', () => {
//         console.log(111);
//     });
// }

// let dels = document.getElementsByClassName('delete');

// let arr = [];
// let i = 0;
// del.forEach(item => {
//         arr.push(del[i]);
//         i++;
// });

// console.log(arr);

// while (liStr.firstChild) {
//     liStr.removeChild(liStr.firstChild);
// }

    // del.forEach(item => {
    //     item.addEventListener("click", function(){
    //         ;
    //     });
    //     });

    // del[0].addEventListener('click', () => {
    //     liStr[0].remove();
    // });

    // del = Array.from(del);