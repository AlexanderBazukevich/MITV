const videos = [
    {
        data_id: "0",
        title: "Behind the scenes with songwriters",
        picture: "./assets/images/vid_1.jpg",
        content: "Voluptate elit elit ipsum velit ea ipsum consequat in anim eiusmod. Veniam cupidatat consequat laboris commodo qui amet ea aliquip laborum. Anim Lorem eu voluptate eiusmod cillum reprehenderit reprehenderit sint aliqua id. Mollit culpa occaecat ea labore pariatur laboris tempor aute est excepteur sunt. Magna in eiusmod ex eiusmod reprehenderit et do quis pariatur nisi. Laboris laboris id eu amet elit elit excepteur commodo commodo eiusmod ipsum ullamco.",
        type: "Music"
    },
    {
        data_id: "1",
        title: "Dress like you really mean it",
        picture: "./assets/images/vid_2.jpg",
        content: "Aute proident adipisicing Lorem id duis fugiat. Reprehenderit eiusmod ullamco elit sit fugiat ex non deserunt. Proident tempor irure qui dolore Lorem minim nulla aute Lorem tempor non anim.",
        type: "Fashion"
    },
    {
        data_id: "2",
        title: "Great goals and celebrations",
        picture: "./assets/images/vid_3.jpg",
        content: "Ullamco occaecat reprehenderit dolore. Excepteur sint id sint dolore dolore nulla ex reprehenderit nostrud. Officia ea labore cupidatat officia id eu labore qui ullamco exercitation do ut consequat. Eu commodo exercitation in eu irure.",
        type: "Sport"
    },
    {
        data_id: "3",
        title: "Cosmic gate - new album",
        picture: "./assets/images/vid_4.jpg",
        content: "Ullamco ut voluptate minim Lorem. reprehenderit anim sunt pariatur. Lorem est elit pariatur sint duis voluptate elit eiusmod. Deserunt proident excepteur consequat non. Adipisicing dolore nulla mollit esse Lorem consectetur cupidatat ea aliqua nisi amet incididunt.",
        type: "Trance"
    },
    {
        data_id: "4",
        title: "Push de tempo, ya mamaaa!",
        picture: "./assets/images/vid_5.jpg",
        content: "Nostrud dolor ut id ex nisi officia aliquip cillum aliqua reprehenderit anim sunt pariatur. Lorem est elit pariatur sint duis voluptate elit eiusmod. Deserunt proident excepteur consequat non. Adipisicing dolore nulla mollit esse Lorem consectetur cupidatat ea aliqua nisi amet incididunt.",
        type: "Classic"
    }
]

const videoContainer = document.querySelector('.video__container');
let videoHtml = "";

videos.forEach( (item) => {
    videoHtml += `
    <div class = "video__item" data_id="${item.data_id}">
        <div class="video__image"><img class="video__picture" src=${item.picture}></div>
        <h2 class="video__title video__title_small">${item.title}</h2>
        <p class="video__type">${item.type}</p>
        <p class="video__description">${item.content}</p>
        <a class="button video__button video__button_hidden" href="#">Watch more</a>
    </div>
    `
})

videoContainer.innerHTML += videoHtml;

let currentVideoIndex = 0;
let activeVideoIndex = 1;
const videoItems = document.querySelectorAll('.video__item');
let lastVideoIndex = videoItems.length - 1;

videoContainer.insertBefore(videoItems[lastVideoIndex], videoItems[currentVideoIndex]);
currentVideoIndex = lastVideoIndex;
lastVideoIndex--;
activateVideo();
videoItems[currentVideoIndex].classList.add('video__item_left');
videoContainer.addEventListener('click', clickVideoEventHandler);

function clickVideoEventHandler() {

    const selectedVideoIndex = getSelectedVideoItemIndex(event);

    if (selectedVideoIndex == activeVideoIndex) {
        return false;
    }

    if (selectedVideoIndex <= activeVideoIndex) {
        if (selectedVideoIndex == 0 && activeVideoIndex == videoItems.length - 1) {
            swipeVideoLeft();
            return;
        }
        swipeVideoRight();
    }

    if (selectedVideoIndex > activeVideoIndex) {
        if (selectedVideoIndex == videoItems.length - 1 && activeVideoIndex == 0) {
            swipeVideoRight();
            return;
        }
        swipeVideoLeft();
    }
}

function getSelectedVideoItemIndex(event) {
    let e = event.target;
    let index;

    if (e == videoContainer || (e.parentElement == videoContainer && e.getAttribute('data_id') == null)) {
        return index;
    }

    if (e.parentElement === videoContainer) {
        index = Number(e.getAttribute('data_id'));
    }

    while (e.parentElement != videoContainer) {

        e = e.parentElement;

        if (e.parentElement == videoContainer) {
            index = Number(e.getAttribute('data_id'));
        }
    }

    return index;
}

// activeVideoIndex = 1;
// rightElementIndex = 2;
// leftElementIndex = 0;

// click(selectedIndex) {
//     changeCurrentTo(selectedIndex)
//     changeLeftTo()
//     changeRightTo()
// }

// toggleMid(element) {
//     element.classList.toggle("mid");
// }

// changeCurrentTo(index) {
//     toggleMid(videoItems[activeVideoIndex]);
//     activeVideoIndex = index;
//     toggleMid(videoItems[activeVideoIndex]);
// }

function activateVideo() {
    videoItems[activeVideoIndex].classList.add('video__item_active');
    videoItems[activeVideoIndex].querySelector('.video__type').classList.add('video__type_red');
    videoItems[activeVideoIndex].querySelector('.video__button').classList.remove('video__button_hidden');
}
function deactivateVideo() {
    videoItems[activeVideoIndex].classList.remove('video__item_active');
    videoItems[activeVideoIndex].querySelector('.video__type').classList.remove('video__type_red');
    videoItems[activeVideoIndex].querySelector('.video__button').classList.add('video__button_hidden');
}
function swipeVideoLeft() {

    videoContainer.appendChild(videoItems[currentVideoIndex]);

    videoItems[currentVideoIndex].classList.remove('video__item_left');
    deactivateVideo();

    // videoItems[activeVideoIndex].querySelector('.video__image').classList.add('video__image_left', 'video__image_wide');
    // videoItems[currentVideoIndex].querySelector('.video__image').classList.remove('video__image_left', 'video__image_wide');
    lastVideoIndex = currentVideoIndex;

    if (currentVideoIndex != videoItems.length - 1) {
        currentVideoIndex++;
    } else {
        currentVideoIndex = 0;
    }

    if (activeVideoIndex != videoItems.length - 1) {
        activeVideoIndex++;
    } else {
        activeVideoIndex = 0;
    }

    videoItems[currentVideoIndex].classList.add('video__item_left');
    videoItems[currentVideoIndex].addEventListener('transitionend', activateVideo);
}

function swipeVideoRight() {

    videoContainer.insertBefore(videoItems[lastVideoIndex], videoItems[currentVideoIndex]);

    videoItems[lastVideoIndex].classList.add('video__item_left');
    videoItems[currentVideoIndex].classList.remove('video__item_left');
    deactivateVideo();
    videoItems[currentVideoIndex].addEventListener('transitionend', activateVideo);
    // showItems[activeVideoIndex].querySelector('.video__image').classList.remove('video__image_left', 'video__image_wide');
    // showItems[currentVideoIndex].querySelector('.video__image').classList.add('video__image_wide');
    currentVideoIndex = lastVideoIndex;

    if (lastVideoIndex != 0) {
        lastVideoIndex--;
    } else {
        lastVideoIndex = videoItems.length - 1;
    }

    if (activeVideoIndex != 0) {
        activeVideoIndex--;
    } else {
        activeVideoIndex = videoItems.length - 1;
    }

}
