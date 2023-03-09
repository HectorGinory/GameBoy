function powerBtn() {
  let powerBtn = document.getElementById("power-btn");
  let gameBoy = document.getElementById("gameboy");
  let screen = document.getElementById("start");
  let intro1 = document.getElementById("intro-1");
  let intro2 = document.getElementById("intro-2");
  let intro3 = document.getElementById("intro-3");
  let intro4 = document.getElementById("intro-4");
  let intro5 = document.getElementById("intro-5");
  let intro6 = document.getElementById("intro-6");
  let btnStart = document.getElementById("btn-start");
  let lowBattery = document.getElementById("lowBattery");

  if (document.getElementsByClassName("btn-off").length == 1) {
    powerBtn.classList.remove("btn-off");
    powerBtn.classList.add("btn-on");
    gameboy.classList.add("On");
    lowBattery.classList.add("Off");

    setTimeout(() => {
      intro1.classList.remove("Off");
    }, 5000);

    setTimeout(() => {
      intro1.classList.add("Off");
      intro2.classList.remove("Off");
    }, 8000);

    setTimeout(() => {
      intro2.classList.add("Off");
      intro3.classList.remove("Off");
    }, 12000);

    setTimeout(() => {
      intro3.classList.add("Off");
      intro4.classList.remove("Off");
    }, 16000);

    setTimeout(() => {
      intro4.classList.add("Off");
      intro3.classList.remove("Off");
    }, 18000);

    setTimeout(() => {
      intro3.classList.add("Off");
      intro5.classList.remove("Off");
      pressStart();
    }, 22000);
  } else {
    powerBtn.classList.remove("btn-on");
    powerBtn.classList.add("btn-off");
    gameboy.classList.remove("On");
    screen.classList.remove("Off");
    intro1.classList.add("Off");
    intro2.classList.add("Off");
    intro3.classList.add("Off");
    intro4.classList.add("Off");
    intro5.classList.add("Off");
    intro6.classList.add("Off");
    lowBattery.classList.add("Off");
  }
}

function pressStart() {
  let intro5 = document.getElementById("intro-5");
  let btnStart = document.getElementById("btn-start");
  let startGame = document.getElementById("start-game");
  let upBtn = document.getElementById("up");
  let downBtn = document.getElementById("down");
  let aBtn = document.getElementById("aBtn");

  btnStart.addEventListener("click", function (e) {
    intro5.classList.add("Off");
    startGame.classList.remove("Off");
    upBtn.addEventListener("click", function (e) {
      menuUp();
    });
    downBtn.addEventListener("click", function (e) {
      menuDown();
    });
    aBtn.addEventListener("click", function (e) {
      oakScene();
    });
    menuStart();
  });
}

let menuNumber = 1;

function menuStart() {
  let newGame = document.getElementById("newGame");
  let options = document.getElementById("options");
  let startGame = document.getElementById("start-game");
  let intro6 = document.getElementById("intro-6");

  if (menuNumber == 1) {
    newGame.classList.add("selected");
    options.classList.remove("selected");
    aBtn.addEventListener("click", function (e) {
      oakScene();
    });
  } else {
    options.classList.add("selected");
    newGame.classList.remove("selected");
    aBtn.addEventListener("click", function (e) {
        
    intro6.classList.add("Off");
      startGame.classList.add("Off");
      lowBattery();
    });
  }
}

function menuDown() {
  if (menuNumber == 1) {
    menuNumber++;
  }

  menuStart();
}

function menuUp() {
  if (menuNumber == 2) {
    menuNumber--;
  }

  menuStart();
}

function oakScene() {
  let startGame = document.getElementById("start-game");
  let intro6 = document.getElementById("intro-6");

  startGame.classList.add("Off");
  intro6.classList.remove("Off");

  setTimeout(() => {
    intro6.classList.add("Off");
    lowBattery();
  }, 2000);
}

function lowBattery() {
  let lowBattery = document.getElementById("lowBattery");
  lowBattery.classList.remove("Off");

  setTimeout(() => {
    powerBtn();
  }, 4000);
}
