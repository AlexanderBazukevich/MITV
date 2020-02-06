const channels = [
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

const channelsContainer = document.querySelector('.channels_movable');
let channelHtml = "";

let currentChannelElementIndex = 1;
let leftChannelElementIndex = 0;
let rightChannelElementIndex = 2;

channels.forEach( (item) => {
    channelHtml += `
    <div class="show show_hidden" data_id="${item.data_id}">
        <div class="show__arrow"></div>
        <a class="show__title show__title_hidden" href="#">${item.title}</a>
        <p class="show__description show__description_hidden">${item.description}</p>
        <div class="show__image"><img class="show__picture" src="${item.picture}"></div>
    </div>
    `
})

channelsContainer.innerHTML += channelHtml;

const channelItems = channelsContainer.querySelectorAll('.show');

activateChannels();

channelsContainer.addEventListener('click', (event) => {
    const selectedChannelItemIndex = getSelectedChannelItemIndex(event);

    if (selectedChannelItemIndex == undefined) {
        return false;
    };

    if (selectedChannelItemIndex == currentChannelElementIndex) {
        return false;
    };

    leftChannelElementIndex = selectedChannelItemIndex === 0 ? channelItems.length - 1 : selectedChannelItemIndex - 1;
    rightChannelElementIndex = selectedChannelItemIndex === channelItems.length - 1 ? 0 : selectedChannelItemIndex + 1;

    hideAllChannels();

    currentChannelElementIndex = selectedChannelItemIndex;

    activateChannels();
});

function getSelectedChannelItemIndex(event) {
    let e = event.target;
    let index;

    if (e == channelsContainer || (e.parentElement == channelsContainer && e.getAttribute('data_id') == null)) {
        return index;
    }

    if (e.parentElement === channelsContainer) {
        index = Number(e.getAttribute('data_id'));
    }

    while (e.parentElement != channelsContainer) {

        e = e.parentElement;

        if (e.parentElement == channelsContainer) {
            index = Number(e.getAttribute('data_id'));
        }
    }

    return index;
}

function hideAllChannels() {
    channelItems.forEach( item => {
        item.classList.add('show_hidden');
        item.classList.remove('show_active', 'show_inactive', 'show_inactive_left', 'show_inactive_right');
        item.querySelectorAll('.show__arrow').innerHTML = '';
        item.querySelector('.show__title').classList.remove('show__title_center');
        item.querySelector('.show__image').classList.remove('show__image_center');
        item.querySelector('.show__title').classList.add('show__title_hidden');
        item.querySelector('.show__description').classList.add('show__description_hidden');
    });
}

function activateChannels() {
    const e = channelItems[currentChannelElementIndex];
    e.classList.remove('show_hidden');
    e.classList.add('show_active');
    e.querySelector('.show__title').classList.add('show__title_center');
    e.querySelector('.show__image').classList.add('show__image_center');
    e.querySelector('.show__title').classList.remove('show__title_hidden');
    e.querySelector('.show__description').classList.remove('show__description_hidden');
    showLeftChannel(channelItems[leftChannelElementIndex]);
    showRightChannel(channelItems[rightChannelElementIndex]);
}

function showLeftChannel(e) {
    e.classList.add('show_inactive', 'show_inactive_left');
    e.querySelector('.show__arrow').innerHTML = '<i class="fas fa-arrow-left"></i>';
    e.classList.remove('show_hidden');
}

function showRightChannel(e) {
    e.classList.add('show_inactive', 'show_inactive_right');
    e.querySelector('.show__arrow').innerHTML = '<i class="fas fa-arrow-right"></i>';
    e.classList.remove('show_hidden');
}