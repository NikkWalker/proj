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
          closeModal = document.querySelector('[data-close]'),
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

    closeModal.addEventListener('click', closeModalW);

    modalWindow.addEventListener('click', (e) => {
        if (e.target === modalWindow) {
            closeModalW();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modalWindow.classList.contains('show')) {
            closeModalW();
        }
    });

    const modalTimerId = setTimeout(modalW, 4000);

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

    // const fatty = new Card('img/tabs/fatty.jpg', 'Меню "Жирное"', 'Специально для Вас мы отобрали самую жирную еду, которая поможет Вам стать такими же жирными. И вы сможете набивать свое ненасытное нутро, пока не случится заворот кишок. А он обязательно случится, ведь мы заботимся о Вас! Заказывайте скорее, ебаные свиньи!', '1000');

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
        '.menu .container',

    ).render();

    new MenuCard(
        'img/tabs/chick.jpg', 
        'chick', 
        'Меню "Охуевшее"', 
        'Это просто умопомрачительное говно! Такую жратву можно поглощать бесконечно и безостановочно! Такое жрут только самые настоящие олигархи и селебрити. Воробьиные язычки и хвост ягуара, гортань ламы и крокодилья печенка – все только для вас!', 
        99,
        '.menu .container',
 
    ).render();

    new MenuCard(
        'img/tabs/asia.jpg', 
        'asia', 
        'Меню "Узкоглазым"', 
        'Ебаные азиаты жрали это полусырое гавно уже тыщи лет, а теперь предлагают присоединиться и вам к их гельминтозному рациону! Нам настолько похуй, что мы даже в рот ебали вам чего-то готовить – просто сварили ведро риса и накидали сверху сырой рыбы, приколитесь!', 
        50,
        '.menu .container',

    ).render();

    // const fatty = new MenuCard('img/tabs/fatty.jpg', 'fatty', 'Меню "Жирное"', 'Специально для Вас мы отобрали самую жирную еду, которая поможет Вам стать такими же жирными. И вы сможете набивать свое ненасытное нутро, пока не случится заворот кишок. А он обязательно случится, ведь мы заботимся о Вас! Заказывайте скорее, ебаные свиньи!', '1000');

    // fatty.render();

});
