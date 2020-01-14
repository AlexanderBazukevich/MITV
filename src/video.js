const videos = [
    {
        id: "5e185445acd1d8e46e98ff42",
        title: "Behind the scenes with songwriters",
        picture: "./assets/images/vid_1.jpg",
        content: "Voluptate elit elit ipsum velit ea ipsum consequat in anim eiusmod. Veniam cupidatat consequat laboris commodo qui amet ea aliquip laborum. Anim Lorem eu voluptate eiusmod cillum reprehenderit reprehenderit sint aliqua id. Mollit culpa occaecat ea labore pariatur laboris tempor aute est excepteur sunt. Magna in eiusmod ex eiusmod reprehenderit et do quis pariatur nisi. Laboris laboris id eu amet elit elit excepteur commodo commodo eiusmod ipsum ullamco.",
        type: "Music"
    },
    {
        id: "5e1854456165d6bd4c7b0414",
        title: "Dress like you really mean it",
        picture: "./assets/images/vid_2.jpg",
        content: "Aute proident adipisicing Lorem id duis fugiat. Reprehenderit eiusmod ullamco elit sit fugiat ex non deserunt. Proident tempor irure qui dolore Lorem minim nulla aute Lorem tempor non anim.",
        type: "Fashion"
    },
    {
        id: "5e1854455c5f2b11e61dd29c",
        title: "Great goals and celebrations",
        picture: "./assets/images/vid_3.jpg",
        content: "Ullamco occaecat reprehenderit dolore. Excepteur sint id sint dolore dolore nulla ex reprehenderit nostrud. Officia ea labore cupidatat officia id eu labore qui ullamco exercitation do ut consequat. Eu commodo exercitation in eu irure.",
        type: "Sport"
    },
    {
        id: "5e185445fe59ef417c12b900",
        title: "Cosmic gate - new album",
        picture: "./assets/images/vid_4.jpg",
        content: "Ullamco ut voluptate minim Lorem. reprehenderit anim sunt pariatur. Lorem est elit pariatur sint duis voluptate elit eiusmod. Deserunt proident excepteur consequat non. Adipisicing dolore nulla mollit esse Lorem consectetur cupidatat ea aliqua nisi amet incididunt.",
        type: "Trance"
    },
    {
        id: "5e185445fe59ef417c12b900",
        title: "Push de tempo, ya mamaaa!",
        picture: "./assets/images/vid_5.jpg",
        content: "Nostrud dolor ut id ex nisi officia aliquip cillum aliqua reprehenderit anim sunt pariatur. Lorem est elit pariatur sint duis voluptate elit eiusmod. Deserunt proident excepteur consequat non. Adipisicing dolore nulla mollit esse Lorem consectetur cupidatat ea aliqua nisi amet incididunt.",
        type: "Classic"
    }
]

const videoItems = document.querySelectorAll('.video__item');
let html1 = "";
for (let i = 0; i <= videos.length - 1; i++) {
    if (i == 1) {
        html1 += `
            <div class="video__image"><img class="video__picture" src=${videos[i].picture}></div>
            <h2 class="video__title video__title_small">${videos[i].title}</h2>
            <p class="video__type video__type_red">${videos[i].type}</p>
            <p class="video__description">${videos[i].content}</p>
            <a class="button video__button" href="#">Watch more</a>
        `
    } else {
            html1 += `
                <div class="video__image"><img class="video__picture" src=${videos[i].picture}></div>
                <h2 class="video__title video__title_small">${videos[i].title}</h2>
                <p class="video__type">${videos[i].type}</p>
                <p class="video__description">${videos[i].content}</p>
                <a class="button video__button video__button_hidden" href="#">Watch more</a>
            `
            }

    videoItems[i].innerHTML = html1;
    html1 = "";
}

function hideVideos() {
    videoItems.forEach( video__item => {video__item.classList.add('video__item_hidden')});
}

function changeState() {
    // console.log(this);
    // console.log(cont[i].classList);

    if (this.classList == 'video__item') {
        hideVideos();

        this.classList.add('video__item_active');
        this.classList.remove('video__item_hidden');
        this.querySelector('.button').classList.remove('video__button_hidden');
        this.querySelector('.video__type').classList.add('video__type_red');

        this.nextElementSibling.classList.remove('video__item_active');
        this.nextElementSibling.classList.remove('video__item_hidden');
        this.nextElementSibling.querySelector('.button').classList.add('video__button_hidden');
        this.nextElementSibling.querySelector('.video__type').classList.remove('video__type_red');
        
        this.previousElementSibling.classList.remove('video__item_active');
        this.previousElementSibling.classList.remove('video__item_hidden');
        this.previousElementSibling.querySelector('.button').classList.add('video__button_hidden');
        this.previousElementSibling.querySelector('.video__type').classList.remove('video__type_red');
    }
}

videoItems.forEach( video__item => {video__item.addEventListener('click', changeState)});
