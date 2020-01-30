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

const videoContainer = document.querySelector('.video');
let videoHtml = "";

let currentElementIndex = 1;
let leftElementIndex = 0;
let rightElementIndex = 2;

videos.forEach( (item) => {
    videoHtml += `
    <div class = "video__item video__item_hidden" data_id="${item.data_id}">
        <div class="video__image"><img class="video__picture" src=${item.picture}></div>
        <h2 class="video__title video__title_small">${item.title}</h2>
        <p class="video__type">${item.type}</p>
        <p class="video__description">${item.content}</p>
        <a class="button video__button video__button_hidden" href="#">Watch more</a>
    </div>
    `
})

videoContainer.innerHTML += videoHtml;

const videoItems = document.querySelectorAll('.video__item');

activate();

videoContainer.addEventListener('click', (event) => {
    const selectedVideoItemIndex = getSelectedVideoItemIndex(event);

    if (selectedVideoItemIndex == undefined) {
        return false;
    }

    if (selectedVideoItemIndex == currentElementIndex) {
        return false;
    };

    currentElementIndex = selectedVideoItemIndex;
    hideAll();

    if (currentElementIndex == videoItems.length - 1 && rightElementIndex != 1) {
        setWideRightImage(videoItems[0]);
    } else if (currentElementIndex == rightElementIndex) {
        setWideRightImage(videoItems[currentElementIndex + 1]);
    };

    if (currentElementIndex == 0 && leftElementIndex != videoItems.length - 2) {
        setWideLeftImage(videoItems[videoItems.length - 1]);
        videoItems[videoItems.length - 1].classList.add('video__item_left');
        videoItems[currentElementIndex + 1].classList.add('video__item_right');
    } else if (currentElementIndex == leftElementIndex && rightElementIndex != 1) {
        setWideLeftImage(videoItems[currentElementIndex - 1]);
        videoItems[currentElementIndex - 1].classList.add('video__item_left');
        videoItems[currentElementIndex + 1].classList.add('video__item_right');
    } else if (currentElementIndex == leftElementIndex) {
        setWideLeftImage(videoItems[currentElementIndex - 1]);
        videoItems[currentElementIndex - 1].classList.add('video__item_left');
        videoItems[0].classList.add('video__item_right');
    };

    leftElementIndex = currentElementIndex === 0 ? videoItems.length - 1 : currentElementIndex - 1;
    rightElementIndex = currentElementIndex === videoItems.length - 1 ? 0 : currentElementIndex + 1;

    activate();
});

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

// currentElementIndex = 1;
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
//     toggleMid(videoItems[currentElementIndex]);
//     currentElementIndex = index;
//     toggleMid(videoItems[currentElementIndex]);
// }

function activate() {
    const e = videoItems[currentElementIndex];
    e.classList.add('video__item_active', 'video__item_second');
    e.classList.remove('video__item_hidden');
    e.querySelector('.video__type').classList.add('video__type_red');
    e.querySelector('.video__button').classList.remove('video__button_hidden');
    showLeft(videoItems[leftElementIndex]);
    showRight(videoItems[rightElementIndex]);
}

function show(e) {
    e.classList.remove('video__item_hidden');
    e.querySelector('.video__type').classList.remove('video__type_red');
    e.querySelector('.video__button').classList.add('video__button_hidden');
}

function hideAll() {
    videoItems.forEach( video__item => {
        video__item.classList.add('video__item_hidden');
        video__item.classList.remove('video__item_active', 'video__item_second', 'video__item_third', 'video__item_first', 'video__item_left', 'video__item_right');
        video__item.querySelector('.video__image').classList.remove('video__image_wide', 'video__image_left');
    });
}

function showLeft(e) {
    show(e);
    videoItems[leftElementIndex].classList.add('video__item_first');
}

function showRight(e) {
    show(e);
    videoItems[rightElementIndex].classList.add('video__item_third');
}

function setWideLeftImage(e) {
    e.querySelector('.video__image').classList.add('video__image_left', 'video__image_wide');
    // e.classList.add('video__item_left');
}

function setWideRightImage(e) {
    e.querySelector('.video__image').classList.add('video__image_wide');
}
