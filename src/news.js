const topics = [
    {
        id: "5e185445acd1d8e45e98ff42",
        title: "the music industry can learn from successful YouTubers",
        picture: "./assets/images/singer.png",
        content: "Voluptate elit elit ipsum velit ea ipsum consequat in anim eiusmod. Veniam cupidatat consequat laboris commodo qui amet ea aliquip laborum. Minim eiusmod commodo consectetur aliqua. Anim Lorem eu voluptate eiusmod cillum reprehenderit reprehenderit sint aliqua id. Mollit culpa occaecat ea labore pariatur laboris tempor aute est excepteur sunt. Magna in eiusmod ex eiusmod reprehenderit et do quis pariatur nisi. Laboris laboris id eu amet elit elit excepteur commodo commodo eiusmod ipsum ullamco.",
        date: "2018-07-23"
    },
    {
        id: "5e1854456165d6bd3c7b0414",
        title: "What we can learn from successful blogers",
        picture: "./assets/images/singer.png",
        content: "Aute proident adipisicing Lorem id duis fugiat. Reprehenderit eiusmod ullamco elit sit fugiat ex non deserunt. Proident tempor irure qui dolore Lorem minim nulla aute Lorem tempor non anim.",
        date: "2018-11-09"
    },
    {
        id: "5e1854455c5f2b10e61dd29c",
        title: "The music industry right now",
        picture: "./assets/images/singer.png",
        content: "Ullamco occaecat reprehenderit dolore ut incididunt nostrud cillum anim excepteur mollit voluptate non ea excepteur. Excepteur sint id sint dolore dolore nulla ex reprehenderit nostrud. Officia ea labore cupidatat officia id eu labore qui ullamco exercitation do ut consequat. Eu commodo exercitation in eu irure.",
        date: "2015-11-03"
    },
    {
        id: "5e185445fe59ef416c12b900",
        title: "Cosmic gate - new album",
        picture: "./assets/images/singer.png",
        content: "Ullamco ut voluptate minim Lorem. Nostrud dolor ut id ex nisi officia aliquip cillum aliqua reprehenderit anim sunt pariatur. Lorem est elit pariatur sint duis voluptate elit eiusmod. Deserunt proident excepteur consequat non. Adipisicing dolore nulla mollit esse Lorem consectetur cupidatat ea aliqua nisi amet incididunt.",
        date: "2018-02-25"
    }
]

var topic = document.querySelectorAll('.topic');

function createTopic(target, source) {
    target.querySelector('.title__text').textContent = source.title;
    target.querySelector('.topic__date').textContent = source.date;
    target.querySelector('.topic__text').textContent = source.content;
    target.querySelector('.title__image').src = source.picture;
}

for (var i = 0; i < topics.length; i++) {
    createTopic(topic[i], topics[i]);
}