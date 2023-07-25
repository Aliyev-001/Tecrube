const hamburger = document.querySelector(".hamburger-menu");
const hamburgermenu = document.querySelector(".hamburger_menu");
const signİn = document.querySelector(".sign_in");
const signİn1 = document.querySelector(".sign-in");
const popup = document.querySelector(".popup");
const nav_right_item = document.querySelector(".nav_right_item");
const Watchlist1 = document.querySelector(".Watchlist1");
const removeWishlist = document.querySelector(".removeWishlist");

var swiper = new Swiper('.swiper', {
    slidesPerGroup: 1,
    loop: true,
    fade: true,
    grabCursor: true,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        415: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        500: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        868: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        1000: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1250: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
    }
});

hamburger.addEventListener('click', function () {
    // Toggle the menu display when the hamburger is clicked
    if (hamburgermenu.style.display === 'flex') {
        hamburgermenu.style.display = 'none';
        hamburgermenu.style.transition = '1s';

    } else {
        hamburgermenu.style.display = 'flex';
        hamburgermenu.style.position = 'fixed';
        hamburgermenu.style.left = '0';
        hamburgermenu.style.top = '0';
    }
});

signİn.addEventListener('click', function () {
    signİn1.style.display = 'flex';

})

popup.addEventListener('click', function () {
    signİn1.style.display = 'none';
})

nav_right_item.addEventListener('click', function () {

    if (Watchlist1.style.display === 'block') {
        Watchlist1.style.display = 'none'
    }
    else {
        Watchlist1.style.display = 'block'

    }

}
);

function getDirection() {
    var windowWidth = window.innerWidth;
    var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

    return direction;
}

///////////////////
const swiper1 = document.querySelector('.swiper-wrapper');
const swiper2 = document.querySelector('.swiper2');
const movies = [
    {
        name: "Avatar",
        img: "./src/picture/avatar.jpg",
        date: 2010,
        time: "2h 23m"
    },
    {
        name: "The Lord Of The Rings",
        img: "./src/picture/lord.jpg",
        date: 2012,
        time: "2h 30m"
    },
    {
        name: "fast and fiverous",
        img: "./src/picture/fast.jpg",
        date: 2022,
        time: "2h 10m"
    },
    {
        name: "The hobbit",
        img: "./src/picture/hobbit.jpg",
        date: 2011,
        time: "2h 45m"
    },
    {
        name: "peaky blanders",
        img: "./src/picture/peaky.jpg",
        date: 2007,
        time: "1h 45m"
    },
    {
        name: "Avatar",
        img: "./src/picture/avatar.jpg",
        date: 2010,
        time: "2h 23m"
    },
    {
        name: "The Lord Of The Rings",
        img: "./src/picture/lord.jpg",
        date: 2012,
        time: "2h 30m"
    },
    {
        name: "fast and fiverous",
        img: "./src/picture/fast.jpg",
        date: 2022,
        time: "2h 10m"
    },
]


for (let i = 0; i < movies.length; i++) {

    swiper1.innerHTML += `
        <div class="swiper-slide">
            <section>
              <div class="container">
                <div class="card">
                  <div class="content">
                    <div class="imgBx">
                      <img src="${movies[i].img}" />
                    </div>
                    <div class="contentBx">
                      <h3><div>${movies[i].name}</div><span>${movies[i].date}</span>  <span>${movies[i].time}</span></h3>
                    </div>
                  </div>
                  <ul class="sci">
                    <li>
                      <i class="addWishlist fa-regular fa-heart"></i>
                    </li>
                    <li>
                     <i class="playmovie fa-brands fa-google-play"></i>
                    </li>
                    <li>
                    <i class = "removeWishlist ri-dislike-line"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
    `,

        swiper2.innerHTML += `
        <div class="swiper-slide">
            <section>
              <div class="container">
                <div class="card">
                  <div class="content">
                    <div class="imgBx">
                      <img src="${movies[i].img}" />
                    </div>
                    <div class="contentBx">
                      <h3>${movies[i].name}<br /><span>${movies[i].date}</span>  <span>${movies[i].time}</span></h3>
                    </div>
                  </div>
                  <ul class="sci">
                    <li>
                      <i class="fa-regular fa-heart"></i>
                    </li>
                    <li>
                      <i class="fa-brands fa-google-play"></i>
                    </li>
                    <li>
                    <i class = "removeWishlist ri-dislike-line"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
    `
}


document.addEventListener('click', function (e) {
    const addWishlist = document.querySelector('.addWishlist');
    const Watchlist = document.querySelector('.Watchlist');

    if (e.target.classList.contains('addWishlist')) {
        const imageSrc = e.target.parentElement.parentElement.previousElementSibling.firstElementChild.firstElementChild.src;

        const name = e.target.parentElement.parentElement.previousElementSibling.lastElementChild.firstElementChild.firstElementChild.innerText;

        const existingItem = Watchlist.querySelector(`[data-name="${name}"]`);
        if (!existingItem) {
            const newItem = document.createElement('div');
            newItem.classList.add('Watchlist_item');
            newItem.setAttribute('data-name', name);
            newItem.innerHTML = `
          <img width="50px" height="50px" src="${imageSrc}" alt="" />
          <h6>${name}</h6>
        `;
            Watchlist.appendChild(newItem);
        }
    } else if (e.target.classList.contains('removeWishlist')) {
        const Watchlist = document.querySelector('.Watchlist');

        const name = e.target.parentElement.parentElement.previousElementSibling.lastElementChild.firstElementChild.firstElementChild.innerText;
        const existingItem = Watchlist.querySelector(`[data-name="${name}"]`);
        if (existingItem) {
            Watchlist.removeChild(existingItem);
        }
    }
});
