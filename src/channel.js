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

let currentShowIndex = 0;
let activeShowIndex = 1;
const showItems = sliderContainer.querySelectorAll('.show');
let arrowElem;
let lastShowIndex = showItems.length - 1;

sliderContainer.insertBefore(showItems[lastShowIndex], showItems[currentShowIndex]);
currentShowIndex = lastShowIndex;
lastShowIndex--;
showSelectedShow();
sliderContainer.addEventListener('click', clickShowEventHandler);

function clickShowEventHandler() {
    const selectedShowIndex = getSelectedShowIndex(event);

    if (selectedShowIndex == activeShowIndex) {
        return false;
    }

    if (selectedShowIndex <= activeShowIndex) {
        if (selectedShowIndex == 0 && activeShowIndex == showItems.length - 1) {
            swipeShowLeft();
            return;
        }
        swipeShowRight();
    }

    if (selectedShowIndex > activeShowIndex) {
        if (selectedShowIndex == showItems.length - 1 && activeShowIndex == 0) {
            swipeShowRight();
            return;
        }
        swipeShowLeft();
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

function showSelectedShow() {
    arrowElem = showItems[activeShowIndex].querySelector('.show__arrow');
    showItems[currentShowIndex].classList.add('show_inactive_left');
    showItems[activeShowIndex].classList.remove('show_inactive');
    showItems[activeShowIndex].removeChild(arrowElem);
    // sliderContainer.addEventListener('transitionend', () => {
    //     console.log('Start!');
    //     sliderContainer.addEventListener('click', clickShowEventHandler);
    // })
}

function swipeShowLeft() {

    // sliderContainer.removeEventListener('click', clickShowEventHandler);
    // console.log('Stop!');
    sliderContainer.appendChild(showItems[currentShowIndex]);
    showItems[activeShowIndex].classList.add('show_inactive');
    showItems[activeShowIndex].insertBefore(arrowElem, showItems[activeShowIndex].firstChild)
    // arrowElem.innerHTML = '<i class="fas fa-arrow-left"></i>';
    showItems[currentShowIndex].classList.remove('show_inactive_left');
    lastShowIndex = currentShowIndex;

    if (currentShowIndex != showItems.length - 1) {
        currentShowIndex++;
    } else {
        currentShowIndex = 0;
    }

    if (activeShowIndex != showItems.length - 1) {
        activeShowIndex++;
    } else {
        activeShowIndex = 0;
    }

    // let animation = sliderItems[currentShowIndex].animate([
    //     {marginLeft: `0px`},
    //     {marginLeft: `-${elementWidth}px`}
    // ], 1000);
    // animation.onfinish = () => {
    //     slider.addEventListener('click', clickShowEventHandler);
    //     document.addEventListener('keydown', keyEventHandler);
    // }
    showSelectedShow();
    // sliderContainer.addEventListener('click', clickShowEventHandler);
}

function swipeShowRight() {

    // sliderContainer.removeEventListener('click', clickShowEventHandler);
    // console.log('Stop!');

    sliderContainer.insertBefore(showItems[lastShowIndex], showItems[currentShowIndex]);
    showItems[activeShowIndex].classList.add('show_inactive');
    showItems[activeShowIndex].insertBefore(arrowElem, showItems[activeShowIndex].firstChild)
    // arrowElem.innerHTML = '<i class="fas fa-arrow-right"></i>';
    showItems[currentShowIndex].classList.remove('show_inactive_left');
    currentShowIndex = lastShowIndex;

    if (lastShowIndex != 0) {
        lastShowIndex--;
    } else {
        lastShowIndex = showItems.length - 1;
    }

    if (activeShowIndex != 0) {
        activeShowIndex--;
    } else {
        activeShowIndex = showItems.length - 1;
    }

    // let animation = sliderItems[currentShowIndex].animate([
    //     {marginRight: `-${elementWidth}px`},
    //     {marginRight: `0px`}
    // ], 1000);
    // animation.onfinish = () => {
    //     slider.addEventListener('click', clickShowEventHandler);
    //     document.addEventListener('keydown', keyEventHandler);
    // }
    showSelectedShow();
    // sliderContainer.addEventListener('click', clickShowEventHandler);
}
