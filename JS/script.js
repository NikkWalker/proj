'use strict';

const personalMovieDB = {
    count: 0, 
    movies:{}, 
    actors:{},
    genres:[],
    private: false,
    start: function () {
        personalMovieDB.count = +prompt("How many movies you had seen?", "");

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("How many movies you had seen?", "");
        }
    },
    remMyFilms: function() {
        for (let i = 0; i < 2; i++) {
                    const a = prompt("One of the recently seen fims?", ""),
                          b = prompt("Please rate it", "From 0 to 10");
                
                    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                        personalMovieDB.movies[a] = b;
                        console.log('done');
                    } else {
                        console.log('error');
                        i--;
                    }
                }
    },
    detPersLev: function() {
        if (personalMovieDB.count < 10) {
            console.log('Loser');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Classic');
        } else if (personalMovieDB.count >= 30) {
            console.log('Cineman');
        } else {
            console.log('error');
        }
    },
    showMyDBase: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    writeGenres: function() {
        let i;
        // for (i = 1; i <= 3; i++) {
        //     personalMovieDB.genres[i - 1] = prompt(`Your favourite genre under the number ${i}`, "");
        // }
        // while (personalMovieDB.genres == '' || personalMovieDB.genres == null) {
        //     console.log('Your data is incorrect');
        //     i--;
        //     }
        let genres = prompt('Type genres, separated with comma').toLowerCase();

        if (genres === '' || genres == null) {
            console.log('Wrong data');
            i--;
        } else {
            personalMovieDB.genres = genres.split(',');
            personalMovieDB.genres.sort();
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Favourite genre No ${i+1} is ${item}`);
        });
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.private == false) {
            personalMovieDB.private = true;
        } else if (personalMovieDB.private == true) {
            personalMovieDB.private = false;
        } else {
            console.log('error');
        }
    }
};

console.log(personalMovieDB);
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDBase(personalMovieDB.private);

// personalMovieDB.remMyFilms();

// personalMovieDB.writeGenres();
// personalMovieDB.genres.forEach(function(item, i, genres) {
//     console.log(`Favourite genre No ${i+1} is ${item}`);
// });


// function detectPersonalLevel() {
//     if (personalMovieDB.count < 10) {
//         console.log('Loser');
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//         console.log('Classic');
//     } else if (personalMovieDB.count >= 30) {
//         console.log('Cineman');
//     } else {
//         console.log('error');
//     }
// }

// detectPersonalLevel();

// function showMyDB (hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB);
//     }
// }

// showMyDB(personalMovieDB.private);

// function writeYourGenres() {
//     for (let i = 1; i <= 3; i++) {
//         personalMovieDB.genres[i - 1] = prompt(`Your favourite genre under the number ${i}`, "");
//     }
// }

// writeYourGenres();


// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt("One of the recently seen fims?", ""),
//               b = prompt("Please rate it", "From 0 to 10");
    
//         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log('done');
//         } else {
//             console.log('error');
//             i--;
//         }
//     }
// }

// rememberMyFilms();



// console.log(personalMovieDB);

// function checkPrivate() {
//     if (personalMovieDB.private == false) {
//         console.log(personalMovieDB);
//         console.log('pidari');

//     } else {
//         console.log('error');
//         console.log('pidari');
//     }
// }

// checkPrivate();


// function writeYourGenres() {
   
//     for (let i = 0; i < 3; i++) {
//         const a = prompt(`Your favourite genre under the number ${i+1}`, "");
//         if (a != null && a != '' && a.length < 50) {
//             personalMovieDB.genres[i] = a;
//             console.log('done');
//         } else {
//             console.log('error');
//             i--;
//         }
//     }
// }

// writeYourGenres();


// let i = 0;
// while (i < 3) {
//     let a = prompt("One of the recently seen fims?", ""),
//         b = prompt("Please rate it", "From 0 to 10");
//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//     }
//     i++;
// }   

// let i = 0;
// do {
//     const a = prompt("One of the recently seen fims?", ""),
//           b = prompt("Please rate it", "From 0 to 10");
//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
//     i++;
// } while (i < 2);