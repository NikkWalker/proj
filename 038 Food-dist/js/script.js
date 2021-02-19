'use strict';

document.addEventListener('DOMContentLoaded', () => {

    //tabs

    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
    
    // Timer

    const deadline = '2021-02-27';

    function getTimeRemain(endtime) {
        const t =  Date.parse(endtime) - Date.parse(new Date()),
              days = Math.floor(t / (1000 * 60 * 60 * 24)),
              hours = Math.floor((t / (1000 * 60 * 60) % 24)),
              minutes = Math.floor((t / (1000 * 60) % 60)),
              seconds = Math.floor((t / 1000) % 60);

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timeInterval = setInterval(updateClock, 1000);

        updateClock();
    
        function updateClock() {
            const t = getTimeRemain(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('.timer', deadline);

    // Modal



    const modalButton = document.querySelectorAll('[data-modal]'),
          modalWindow = document.querySelector('.modal'),
        //   closeModal = document.querySelector('[data-close]'),
          shadow = document.querySelector('.modal__dialog');

    function modalW () {
        modalWindow.classList.add('show');
        modalWindow.classList.remove('hide');
        // modalWindow.classList.toggle('show');
        document.body.style.overflow = 'hidden';
        // clearInterval(modalTimerId);
    }

    modalButton.forEach(btn => {
        btn.addEventListener('click', modalW);
        // modalWindow.classList.add('show');
        // modalWindow.classList.remove('hide');
        // document.body.style.overflow = 'hidden';
        // modalWindow.style.display = 'block';
    });

    function closeModalW() {
        modalWindow.classList.add('hide');
        modalWindow.classList.remove('show');
        document.body.style.overflow = '';
    }

    // closeModal.addEventListener('click', closeModalW);

    modalWindow.addEventListener('click', (e) => {
        if (e.target === modalWindow || e.target.getAttribute('data-close') == '') {
            closeModalW();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modalWindow.classList.contains('show')) {
            closeModalW();
        }
    });

    const modalTimerId = setTimeout(modalW, 40000);

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            modalW();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }
    
    window.addEventListener('scroll', showModalByScroll);

    // const cardsContainer = document.querySelector('[data-menu]'),
    //       card = document.createElement('div');

    // function Card(img, title, description, cost) {
    //     this.img = img;
    //     this.title = title;
    //     this.description = description;
    //     this.cost = cost;
    // }

    // const fatty = new Card('img/tabs/fatty.jpg', 'Меню "Жирное"', 'Специально для Вас мы отобрали самую 
    // жирную еду, которая поможет Вам стать такими же жирными. И вы сможете набивать свое ненасытное нутро, 
    // пока не случится заворот кишок. А он обязательно случится, ведь мы заботимся о Вас! Заказывайте скорее, 
    // ебаные свиньи!', '1000');

    // cardsContainer.append(card);

    // console.log(fatty.description);

    // card.innerHTML = `
    //                 <div class="menu__item">
    //                 <img src="${fatty.img}" alt="vegy">
    //                 <h3 class="menu__item-subtitle">${fatty.title}</h3>
    //                 <div class="menu__item-descr">${fatty.description}</div>
    //                 <div class="menu__item-divider"></div>
    //                 <div class="menu__item-price">
    //                     <div class="menu__item-cost">Цена:</div>
    //                     <div class="menu__item-total"><span>${fatty.cost}</span> грн/день</div>
    //                 </div>
    //                 </div>
    //                 `;

    // console.log(cardsContainer);

    class MenuCard {
        constructor(img, altimg, title, description, cost, parentSelector, ...classes) {
                this.img = img;
                this.altimg = altimg;
                this.title = title;
                this.description = description;
                this.cost = cost;
                this.classes = classes || 'menu__item';
                this.parent = document.querySelector(parentSelector);
                this.transfer = 27;
                this.changeToUAH();
        }
        
        changeToUAH() {
            this.cost = this.cost * this.transfer;
        }

        render() {
            const card = document.createElement('div');
            if (this.classes.length === 0) {
                this.card = 'menu__item';
                card.classList.add(this.card);
            } else {
                this.classes.forEach(className => card.classList.add(className));
            }

            card.innerHTML = `
                    <img src="${this.img}" alt="${this.altimg}">
                    <h3 class="menu__item-subtitle">${this.title}</h3>
                    <div class="menu__item-descr">${this.description}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.cost}</span> грн/день</div>
                    </div>
                    `;
                    this.parent.append(card);
        }
    }

    new MenuCard(
        'img/tabs/fatty.jpg', 
        'fatty', 
        'Меню "Жирное"', 
        'Специально для Вас мы отобрали самую жирную еду, которая поможет Вам стать такими же жирными. И вы сможете набивать свое ненасытное нутро, пока не случится заворот кишок. А он обязательно случится, ведь мы заботимся о Вас! Заказывайте скорее, ебаные свиньи!', 
        9,
        '.menu .container'

    ).render();

    new MenuCard(
        'img/tabs/chick.jpg', 
        'chick', 
        'Меню "Охуевшее"', 
        'Это просто умопомрачительное говно! Такую жратву можно поглощать бесконечно и безостановочно! Такое жрут только самые настоящие олигархи и селебрити. Воробьиные язычки и хвост ягуара, гортань ламы и крокодилья печенка – все только для вас!', 
        99,
        '.menu .container'
 
    ).render();

    new MenuCard(
        'img/tabs/asia.jpg', 
        'asia', 
        'Меню "Узкоглазым"', 
        'Ебаные азиаты жрали это полусырое гавно уже тыщи лет, а теперь предлагают присоединиться и вам к их гельминтозному рациону! Нам настолько похуй, что мы даже в рот ебали вам чего-то готовить – просто сварили ведро риса и накидали сверху сырой рыбы, приколитесь!', 
        50,
        '.menu .container'

    ).render();

        // Forms

        const forms = document.querySelectorAll('form');

        const message = {
            loading: 'img/form/spinner.svg',
            success: 'Thanks! Please wait for our call!',
            failure: 'Something went wrong'
        };
    
        forms.forEach(item => {
            postData(item);
        }); 
    
        function postData(form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
    
                const statusMessage = document.createElement('img');
                statusMessage.src = message.loading;
                statusMessage.style.cssText = `
                    display: block;
                    margin: 0 auto;                
                `;
                // form.append(statusMessage);
                form.insertAdjacentElement('afterend', statusMessage);
    


                // const request = new XMLHttpRequest();
                // request.open('POST', 'server.php');
    
                // request.setRequestHeader('Content-type', 'application/json');
                const formData = new FormData(form);

                const object = {};
                formData.forEach(function(value, key) {
                    object[key] = value;
                });

                // const json = JSON.stringify(object);

                fetch('server1.php', {
                    method: "POST",
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(object)
                })
                .then(data => data.text())
                .then(data => {
                        console.log(data);
                        showThanksModal(message.success);
                        form.reset();
                        statusMessage.remove();
                }).catch(() => {
                    showThanksModal(message.failure);
                }).finally(() => {
                    form.reset();
                });          // вместо 287-290 и request.send(json), 293-298;
    


            //     request.send(json);
    
            //     request.addEventListener('load', () => {
            //         if (request.status === 200) {
            //             console.log(request.response);
            //             showThanksModal(message.success);
            //             form.reset();
            //             statusMessage.remove();
            //         } else {
            //             showThanksModal(message.failure);
            //         }
            //     });
            // });
        });

    function showThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog');

        prevModalDialog.classList.add('hide');
        modalW();

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close" data-close>×</div>
                <div class="modal__title">${message}</div>
            </div>
        
        `;

        document.querySelector('.modal').append(thanksModal);
        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            closeModalW();
        }, 4000);
    }

//     fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: "POST",
//         body: JSON.stringify({name: 'Quu'}),
//         headers: {
//             'Content-type': 'application/json'
    }
});
//         .then(response => response.json())
//         .then(json => console.log(json));