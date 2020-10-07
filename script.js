const door1 = document.getElementById("door1");
const door2 = document.getElementById("door2");
const door3 = document.getElementById("door3");
const startButton = document.getElementById("start");
var linkDoor1;
var linkDoor2;
var linkDoor3;
var numClosedDoors = 3;
var currentlyPlaying = true;

const phrogList = ['https://scontent-lga3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/120556266_255623529109092_5702434099043361898_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=100&_nc_ohc=MpU1Le3sEHMAX9PJTGU&oh=4aa4b92112af9b5a331133b8b9278e2f&oe=5FA45498', 'https://i.redd.it/yycplgbm1pu41.jpg','https://wompampsupport.azureedge.net/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.kym-cdn.com%2Fentries%2Ficons%2Ffacebook%2F000%2F029%2F498%2FFrog_relaxing_0-9_screenshot.jpg'];
const monkeList = ['https://i.pinimg.com/originals/70/f4/d6/70f4d69acb640b4c1d834e188e35bde8.jpg', 'https://i.pinimg.com/originals/97/e6/a5/97e6a552c94e77629103b671831ceb06.png', 'https://i.ytimg.com/vi/mtkgjgHWkPg/maxresdefault.jpg', 'https://external-preview.redd.it/SCs0RGQKb2Ya74Roq6r8PlHjunw4aDIYNb5B_WAVPO0.jpg?auto=webp&s=9376e64a87092b4baf5fd91965d580d9099e7d1e', 'https://lh3.googleusercontent.com/proxy/ZHeJ1FOrCpqOUUdUXMf9KOb3wmhJWlJ_N0r_VHfN_hsUIgbY_5kq2iXde4GLzwo4FIkAmukcbKRLfNxaiWSAl3IPXu6TBK7s4KrmYBuIrQP566kLyGQeg_PtlaaaIxYkfedJ2PaxrMIq53vWleOTtJQ', 'https://thumbs.dreamstime.com/b/celebes-crested-macaque-open-mouth-close-up-portrait-green-natural-background-black-sulawesi-ape-habitat-island-156971340.jpg'];

const closedDoorPath = 'https://content.codecademy.com/projects/chore-door/images/closed_door.svg';


door1.onclick = () => {
    if (!isClicked(door1) && currentlyPlaying) {
        door1.src = linkDoor1;
        playDoor(door1);
    }
}
door2.onclick = () => {
    if (!isClicked(door2) && currentlyPlaying) {
        door2.src = linkDoor2;
        playDoor(door2);
    }
}
door3.onclick = () => {
    if (!isClicked(door3) && currentlyPlaying) {
        door3.src = linkDoor3;
        playDoor(door3);
    }
}

startButton.onclick = () => {
    if (!currentlyPlaying) {
        numClosedDoors = 3;
        currentlyPlaying = true;
        door1.src = closedDoorPath;
        door2.src = closedDoorPath;
        door3.src = closedDoorPath;
        startButton.innerHTML = 'Good luck!';
        randomChoreDoorGenerator();
    }
}

const gameOver = status => {
    if (status === 'win') {
        startButton.innerHTML = "FUNKY MONKY FRIDAY! PLAY AGAIN?";
    } else {
        startButton.innerHTML = "depres monke. try again";
    }
    currentlyPlaying = false;
}


const isBot = door => phrogList.includes(door.src);

const isClicked = door => door.src !== closedDoorPath;

const playDoor = door => {
    numClosedDoors --;
    if (numClosedDoors === 0) {
        gameOver('win');
    } else if (isBot(door)) {
        gameOver();
    }
}

const randomChoreDoorGenerator = () => {
    var choreDoor = Math.floor(3 * Math.random());
    switch (choreDoor) {
        case 0:
            linkDoor1 = phrogList[Math.floor(Math.random() * phrogList.length)];
            linkDoor2 = monkeList[Math.floor(Math.random() * monkeList.length)];
            linkDoor3 = monkeList[Math.floor(Math.random() * monkeList.length)];
            break;
        case 1:
            linkDoor3 = phrogList[Math.floor(Math.random() * phrogList.length)];
            linkDoor1 = monkeList[Math.floor(Math.random() * monkeList.length)];
            linkDoor2 = monkeList[Math.floor(Math.random() * monkeList.length)];
            break;
        case 2:
            linkDoor2 = phrogList[Math.floor(Math.random() * phrogList.length)];
            linkDoor1 = monkeList[Math.floor(Math.random() * monkeList.length)];
            linkDoor3 = monkeList[Math.floor(Math.random() * monkeList.length)];
            break;
        
    }
}



randomChoreDoorGenerator();