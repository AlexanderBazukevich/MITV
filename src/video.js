const videos = [
    {
        data_id: "1",
        title: "Behind the scenes with songwriters",
        picture: "./assets/images/vid_1.jpg",
        content: "Voluptate elit elit ipsum velit ea ipsum consequat in anim eiusmod. Veniam cupidatat consequat laboris commodo qui amet ea aliquip laborum. Anim Lorem eu voluptate eiusmod cillum reprehenderit reprehenderit sint aliqua id. Mollit culpa occaecat ea labore pariatur laboris tempor aute est excepteur sunt. Magna in eiusmod ex eiusmod reprehenderit et do quis pariatur nisi. Laboris laboris id eu amet elit elit excepteur commodo commodo eiusmod ipsum ullamco.",
        type: "Music"
    },
    {
        data_id: "2",
        title: "Dress like you really mean it",
        picture: "./assets/images/vid_2.jpg",
        content: "Aute proident adipisicing Lorem id duis fugiat. Reprehenderit eiusmod ullamco elit sit fugiat ex non deserunt. Proident tempor irure qui dolore Lorem minim nulla aute Lorem tempor non anim.",
        type: "Fashion"
    },
    {
        data_id: "3",
        title: "Great goals and celebrations",
        picture: "./assets/images/vid_3.jpg",
        content: "Ullamco occaecat reprehenderit dolore. Excepteur sint id sint dolore dolore nulla ex reprehenderit nostrud. Officia ea labore cupidatat officia id eu labore qui ullamco exercitation do ut consequat. Eu commodo exercitation in eu irure.",
        type: "Sport"
    },
    {
        data_id: "4",
        title: "Cosmic gate - new album",
        picture: "./assets/images/vid_4.jpg",
        content: "Ullamco ut voluptate minim Lorem. reprehenderit anim sunt pariatur. Lorem est elit pariatur sint duis voluptate elit eiusmod. Deserunt proident excepteur consequat non. Adipisicing dolore nulla mollit esse Lorem consectetur cupidatat ea aliqua nisi amet incididunt.",
        type: "Trance"
    },
    {
        data_id: "5",
        title: "Push de tempo, ya mamaaa!",
        picture: "./assets/images/vid_5.jpg",
        content: "Nostrud dolor ut id ex nisi officia aliquip cillum aliqua reprehenderit anim sunt pariatur. Lorem est elit pariatur sint duis voluptate elit eiusmod. Deserunt proident excepteur consequat non. Adipisicing dolore nulla mollit esse Lorem consectetur cupidatat ea aliqua nisi amet incididunt.",
        type: "Classic"
    }
]

const videoContainer = document.querySelector('.video');
let videoHtml = "";
let currentIndex = 1;

videos.forEach ( (item) => {
    videoHtml += `
    <div class = "video__item" data_id = "${item.data_id}">
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
activate(videoItems[currentIndex]);

videoContainer.addEventListener('click', (event) => {getCurrentIndex(event)});

function getCurrentIndex(event) {
    let e = event.target;
    let index = 0;

    if (e.classList == 'video' || (e.parentElement.classList == 'video' && e.getAttribute('data_id') == null)) {
        return;
    }

    while (e.parentElement.classList != 'video') {
        e = e.parentElement;

        if (e.parentElement.classList == 'video') {
            index = Number(e.getAttribute('data_id'));
            return index;
        }
    }
    index = Number(e.getAttribute('data_id'));
    return index;
}

function activate(e) {
    e.classList.add('video__item_active');
    // e.classList.add('video__item_middle');
    e.querySelector('.video__type').classList.add('video__type_red');
    e.querySelector('.video__button').classList.remove('video__button_hidden');
}

function deactivate(e) {
    e.classList.remove('video__item_active');
    e.querySelector('.video__type').classList.remove('video__type_red');
    e.querySelector('.video__button').classList.add('video__button_hidden');
}

function moveRight() {
    e.classList.add('video__item_right');
}

function moveLeft() {

}

function moveFirst() {

}

function moveLast() {

}


// function hideVideos() {
//     videoItems.forEach( video__item => {
//         video__item.classList.add('video__item_hidden');
//         video__item.classList.remove('video__item_right', 'video__item_left');
//     });
// }

// function activateCurrent(e) {
//     e.classList.add('video__item_active');
//     e.classList.remove('video__item_hidden', 'video__item_left', 'video__item_right');
//     e.classList.add('video__item_middle');
//     e.querySelector('.button').classList.remove('video__button_hidden');
//     e.querySelector('.video__type').classList.add('video__type_red');
// }

// function deactivateNext(e) {
//     e.nextElementSibling.classList.remove('video__item_hidden', 'video__item_active', 'video__item_middle', 'video__item_left', 'video__item_right');
//     e.nextElementSibling.classList.add('video__item_right');
//     e.nextElementSibling.querySelector('.button').classList.add('video__button_hidden');
//     e.nextElementSibling.querySelector('.video__type').classList.remove('video__type_red');
// }

// function deactivatePrevious(e) {
//     e.previousElementSibling.classList.remove('video__item_hidden', 'video__item_active', 'video__item_middle', 'video__item_left', 'video__item_right');
//     e.previousElementSibling.classList.add('video__item_left');
//     e.previousElementSibling.querySelector('.button').classList.add('video__button_hidden');
//     e.previousElementSibling.querySelector('.video__type').classList.remove('video__type_red');
// }

// function moveFirst(e) {
//     e.firstElementChild.nextElementSibling.classList.remove('video__item_hidden', 'video__item_active', 'video__item_middle', 'video__item_left', 'video__item_right');
//     e.firstElementChild.nextElementSibling.classList.add('video__item_right');
//     e.firstElementChild.nextElementSibling.querySelector('.video__type').classList.remove('video__type_red');
//     e.firstElementChild.nextElementSibling.querySelector('.button').classList.add('video__button_hidden');
//     e.firstElementChild.nextElementSibling.classList.add('video__item_right');
// }

// function moveLast(e) {
//     e.lastElementChild.classList.remove('video__item_hidden', 'video__item_active', 'video__item_middle', 'video__item_left', 'video__item_right');
//     e.lastElementChild.classList.add('video__item_left');
//     e.lastElementChild.querySelector('.video__type').classList.remove('video__type_red');
//     e.lastElementChild.querySelector('.button').classList.add('video__button_hidden');
//     e.lastElementChild.classList.add('video__item_left');
// }

// function changeState() {

//     if (this.classList == 'video__item video__item_right') {

//         if (this.nextElementSibling == null) {
//             this.querySelector('.video__image').classList.remove('video__image_wide', 'video__image_left');
//             this.parentNode.firstElementChild.nextElementSibling.querySelector('.video__image').classList.remove('video__image_left');
//             this.parentNode.firstElementChild.nextElementSibling.querySelector('.video__image').classList.add('video__image_wide');
//             this.parentNode.classList.remove('video_left');

//             } else if (this.previousElementSibling.previousElementSibling == null) {
//                 this.querySelector('.video__image').classList.remove('video__image_wide', 'video__image_left');
//                 this.nextElementSibling.querySelector('.video__image').classList.add('video__image_wide');
//                 this.nextElementSibling.querySelector('.video__image').classList.remove('video__image_left');
//                 this.parentNode.classList.remove('video_left'); 

//                 } else {
//                     this.querySelector('.video__image').classList.remove('video__image_wide', 'video__image_left');
//                     this.previousElementSibling.querySelector('.video__image').classList.remove('video__image_wide', 'video__image_left');
//                     this.nextElementSibling.querySelector('.video__image').classList.remove('video__image_left');
//                     this.nextElementSibling.querySelector('.video__image').classList.add('video__image_wide');
//                     this.parentNode.classList.remove('video_left');
//                 }
//     }

//     if (this.classList == 'video__item video__item_left') {

//         if (this.previousElementSibling.previousElementSibling == null) {
//             this.parentNode.firstElementChild.nextElementSibling.querySelector('.video__image').classList.remove('video__image_wide', 'video__image_left');
//             this.parentNode.lastElementChild.querySelector('.video__image').classList.add('video__image_wide', 'video__image_left');
//             this.parentNode.classList.add('video_left');

//             } else if (this.nextElementSibling == null) {
//                 this.querySelector('.video__image').classList.remove('video__image_wide', 'video__image_left');
//                 this.previousElementSibling.querySelector('.video__image').classList.add('video__image_wide', 'video__image_left');
//                 this.parentNode.classList.add('video_left');

//                 } else {
//                     this.querySelector('.video__image').classList.remove('video__image_wide', 'video__image_left');
//                     this.nextElementSibling.querySelector('.video__image').classList.remove('video__image_wide', 'video__image_left');
//                     this.previousElementSibling.querySelector('.video__image').classList.add('video__image_wide', 'video__image_left');
//                     this.parentNode.classList.add('video_left');
//                 }
//     }

//     if (this.classList == 'video__item' || this.classList == 'video__item video__item_middle' || this.classList == 'video__item video__item_right' || this.classList == 'video__item video__item_left') {
//         hideVideos();

//         if (this.nextElementSibling == null) {

//             activateCurrent(this);
//             deactivatePrevious(this);

//             moveFirst(this.parentNode);

//             return;
//         }

//         if (this.previousElementSibling.previousElementSibling == null) {

//             activateCurrent(this);
//             deactivateNext(this);

//             moveLast(this.parentNode);

//             return;
//         }

//         activateCurrent(this);
//         deactivatePrevious(this);
//         deactivateNext(this)
//     }
// }

// videoItems.forEach( video__item => {video__item.addEventListener('click', changeState)});
