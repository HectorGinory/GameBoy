function powerBtn() {
    let powerBtn = document.getElementById('power-btn');
    let gameBoy = document.getElementById('gameboy')

    if (document.getElementsByClassName('btn-off').length == 1) {
        powerBtn.classList.remove('btn-off');
        powerBtn.classList.add('btn-on');
        gameboy.classList.add('On');
    } else {
        powerBtn.classList.remove('btn-on');
        powerBtn.classList.add('btn-off');
        gameboy.classList.remove('On');
    }
}
