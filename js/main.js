var powerBtn = document.getElementById("power-btn");
var gameBoy = document.getElementById("gameboy");
var intro1 = document.getElementById("intro-1");
var intro2 = document.getElementById("intro-2");
var intro3 = document.getElementById("intro-3");
var intro4 = document.getElementById("intro-4");
var intro5 = document.getElementById("intro-5");
var intro6 = document.getElementById("intro-6");
var lowBattery = document.getElementById("lowBattery");
var powerOff = document.getElementById("powerOff")
var menuNumber = 1;
var off = true;
powerBtn.addEventListener('click', () => {
  onOff()
})

function onOff() {
  intro1.classList.add("Off")
  intro2.classList.add("Off");
  intro3.classList.add("Off");
  intro4.classList.add("Off");
  intro5.classList.add("Off");
  intro6.classList.add("Off");
  lowBattery.classList.add("Off");

  if (off) {
    gameboy.classList.add("On");
    powerBtn.classList.add("btn-on");
    powerBtn.classList.remove("btn-off");

    setTimeout(() => {
      var intro1TO = setTimeout(() => {
        removeTO(intro1TO, intro2TO, intro3TO, intro4TO, intro5TO, intro6TO)
        intro1.classList.remove("Off");
      }, 5000);
  
      var intro2TO = setTimeout(() => {
          removeTO(intro1TO, intro2TO, intro3TO, intro4TO, intro5TO, intro6TO)
          intro1.classList.add("Off");
          intro2.classList.remove("Off");
      }, 8000);
  
      var intro3TO = setTimeout(() => {
          removeTO(intro1TO, intro2TO, intro3TO, intro4TO, intro5TO, intro6TO)
          intro2.classList.add("Off");
          intro3.classList.remove("Off");
      }, 12000);
  
      var intro4TO = setTimeout(() => {
          removeTO(intro1TO, intro2TO, intro3TO, intro4TO, intro5TO, intro6TO)
          intro3.classList.add("Off");
          intro4.classList.remove("Off");
      }, 16000);
  
      var intro5TO = setTimeout(() => {
          removeTO(intro1TO, intro2TO, intro3TO, intro4TO, intro5TO, intro6TO)
          intro4.classList.add("Off");
          intro3.classList.remove("Off");
      }, 18000);
  
      var intro6TO = setTimeout(() => {
          removeTO(intro1TO, intro2TO, intro3TO, intro4TO, intro5TO, intro6TO)
          intro3.classList.add("Off");
          intro5.classList.remove("Off");
          pressStart();
      }, 22000);
    }, 2000)

    off = false;

  } else {
    consoleGoOff();
    removeTO(intro1TO, intro2TO, intro3TO, intro4TO, intro5TO, intro6TO);

  }
}
function removeTO(intro1TO, intro2TO, intro3TO, intro4TO, intro5TO, intro6TO) {
  if (off) {
    clearTimeout(intro1TO);
    clearTimeout(intro2TO);
    clearTimeout(intro3TO);
    clearTimeout(intro4TO);
    clearTimeout(intro5TO);
    clearTimeout(intro6TO);
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
function menuStart() {
  let newGame = document.getElementById("newGame");
  let options = document.getElementById("options");
  let startGame = document.getElementById("start-game");
  let intro6 = document.getElementById("intro-6");

  if (menuNumber == 1) {
    newGame.classList.add("selected");
    options.classList.remove("selected");
  } else {
    options.classList.add("selected");
    newGame.classList.remove("selected");
  }

  aBtn.addEventListener("click", function (e) {
    if(menuNumber == 1 ) {
      oakScene();
    } else {
      intro6.classList.add("Off");
      startGame.classList.add("Off");
      lowBatteryFunct();
    } 
  });
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
    lowBatteryFunct();
  }, 4000);
}

function lowBatteryFunct() {
  intro6.classList.add("Off");
  lowBattery.classList.remove("Off");
  setTimeout(() => {
    consoleGoOff() 
  }, 2000);
}


function consoleGoOff() {
  intro1.classList.add("Off")
  intro2.classList.add("Off");
  intro3.classList.add("Off");
  intro4.classList.add("Off");
  intro5.classList.add("Off");
  intro6.classList.add("Off");
  lowBattery.classList.add("Off");
  powerOff.classList.remove("Off")
  
  setTimeout(() => {
  powerBtn.classList.remove("btn-on");
  powerBtn.classList.add("btn-off");
  powerOff.classList.add("Off");
  gameboy.classList.remove("On");
  off = true;
  }, 4000)
}