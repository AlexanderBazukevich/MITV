const shows = [
    {
        data_id: "0",
        title: "BMX Challenges",
        description: "The ride of your life",
        picture: "./assets/images/vid_1.jpg"
    },
    {
        data_id: "1",
        title: "Urban scating",
        description: "Let`s be creative with MI Tv",
        picture: "./assets/images/vid_2.jpg"
    },
    {
        data_id: "2",
        title: "Sport",
        description: "Let`s be creative with MI Tv",
        picture: "./assets/images/vid_3.jpg"
    },
    {
        data_id: "3",
        title: "Sport",
        description: "The ride of your life",
        picture: "./assets/images/vid_4.jpg"
    },
    {
        data_id: "4",
        title: "Urban scating",
        description: "Let`s be creative with MI Tv",
        picture: "./assets/images/vid_5.jpg"
    },
    {
        data_id: "5",
        title: "BMX Challenges",
        description: "Let`s be creative with MI Tv",
        picture: "./assets/images/vid_6.jpg"
    },
]

const sliderContainer = document.querySelector('.slider__container');
let sliderHtml = "";

shows.forEach( (item) => {
    sliderHtml += `
    <div class="show show_inactive" data_id="${item.data_id}">
        <div class="show__arrow"></div>
        <div class="show__image"><img class="show__picture" src="${item.picture}"></div>
    </div>
    `
})

/* <div class="show__arrow"></div>
<a class="show__title show__title_hidden" href="#">${item.title}</a>
<p class="show__description show__description_hidden">${item.description}</p> */

sliderContainer.innerHTML += sliderHtml;

let currentIndex = 0;
let activeIndex = 1;
const showItems = sliderContainer.querySelectorAll('.show');
let arrowElem;
let lastIndex = showItems.length - 1;

sliderContainer.insertBefore(showItems[lastIndex], showItems[currentIndex]);
currentIndex = lastIndex;
lastIndex--;
showSelected();

function clickEventHandler() {
    const selectedShowIndex = getSelectedShowIndex(event);

    if (selectedShowIndex <= activeIndex) {
        if (selectedShowIndex == 0 && activeIndex == showItems.length - 1) {
            swipeLeft();
            return;
        }
        swipeRight();
    }

    if (selectedShowIndex > activeIndex) {
        if (selectedShowIndex == showItems.length - 1 && activeIndex == 0) {
            swipeRight();
            return;
        }
        swipeLeft();
    }
}

function getSelectedShowIndex(event) {
    let e = event.target;
    let index;

    if (e == sliderContainer || (e.parentElement == sliderContainer && e.getAttribute('data_id') == null)) {
        return index;
    }

    if (e.parentElement === sliderContainer) {
        index = Number(e.getAttribute('data_id'));
    }

    while (e.parentElement != sliderContainer) {

        e = e.parentElement;

        if (e.parentElement == sliderContainer) {
            index = Number(e.getAttribute('data_id'));
        }
    }

    return index;
}

function showSelected() {
    arrowElem = showItems[activeIndex].querySelector('.show__arrow');
    showItems[currentIndex].classList.add('show_inactive_left');
    showItems[activeIndex].classList.remove('show_inactive');
    showItems[activeIndex].removeChild(arrowElem);
    sliderContainer.addEventListener('click', clickEventHandler);
}

function swipeLeft() {

    sliderContainer.removeEventListener('click', clickEventHandler);

    sliderContainer.appendChild(showItems[currentIndex]);
    showItems[activeIndex].classList.add('show_inactive');
    showItems[activeIndex].insertBefore(arrowElem, showItems[activeIndex].firstChild)
    // arrowElem.innerHTML = '<i class="fas fa-arrow-left"></i>';
    showItems[currentIndex].classList.remove('show_inactive_left');
    lastIndex = currentIndex;

    if (currentIndex != showItems.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }

    if (activeIndex != showItems.length - 1) {
        activeIndex++;
    } else {
        activeIndex = 0;
    }

    // let animation = sliderItems[currentIndex].animate([
    //     {marginLeft: `0px`},
    //     {marginLeft: `-${elementWidth}px`}
    // ], 1000);
    // animation.onfinish = () => {
    //     slider.addEventListener('click', clickEventHandler);
    //     document.addEventListener('keydown', keyEventHandler);
    // }
    showSelected();
}

function swipeRight() {

    sliderContainer.removeEventListener('click', clickEventHandler);

    sliderContainer.insertBefore(showItems[lastIndex], showItems[currentIndex]);
    showItems[activeIndex].classList.add('show_inactive');
    showItems[activeIndex].insertBefore(arrowElem, showItems[activeIndex].firstChild)
    // arrowElem.innerHTML = '<i class="fas fa-arrow-right"></i>';
    showItems[currentIndex].classList.remove('show_inactive_left');
    currentIndex = lastIndex;

    if (lastIndex != 0) {
        lastIndex--;
    } else {
        lastIndex = showItems.length - 1;
    }

    if (activeIndex != 0) {
        activeIndex--;
    } else {
        activeIndex = showItems.length - 1;
    }

    // let animation = sliderItems[currentIndex].animate([
    //     {marginRight: `-${elementWidth}px`},
    //     {marginRight: `0px`}
    // ], 1000);
    // animation.onfinish = () => {
    //     slider.addEventListener('click', clickEventHandler);
    //     document.addEventListener('keydown', keyEventHandler);
    // }
    showSelected();
}
