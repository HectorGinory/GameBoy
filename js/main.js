function powerBtn() {
    let powerBtn = document.getElementById('power-btn');
    let gameBoy = document.getElementById('gameboy')

    if (document.getElementsByClassName('btn-off').length == 1) {
        powerBtn.classList.remove('btn-off');
        powerBtn.classList.add('btn-on');
        gameboy.classList.remove('gameboy-container');
        gameboy.classList.add('gameboy-containerOn');
    } else {
        powerBtn.classList.remove('btn-on');
        powerBtn.classList.add('btn-off');
        gameboy.classList.remove('gameboy-containerOn');
        gameboy.classList.add('gameboy-container');
    }
}

let screenVideo() {
    let screen = document.getElementById('screen')

    let nintendoLogo
}