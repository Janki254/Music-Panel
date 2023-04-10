const sounds = ['Applause', 'Boo', 'Gasp', 'Tada', 'Victory', 'Wrong'];

sounds.forEach((sound) => {
    const btn = document.createElement('button');
    btn.classList.add('btn-class');

    btn.innerText = sound;
    btn.addEventListener('click', () => {
        stopMusic();
        document.getElementById(sound).play();
    });

    document.getElementById('sound-buttons').appendChild(btn);
});

function stopMusic() {
    sounds.forEach((sound) => {
        const music = document.getElementById(sound);

        music.pause();
        music.currentTime = 0;
    });
}
