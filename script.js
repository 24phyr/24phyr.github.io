document.addEventListener('DOMContentLoaded', () => {
    const clickText = document.getElementById('click-text');
    const catGif = document.getElementById('cat-gif');
    const doaAudio = document.getElementById('doa-spin');

    clickText.addEventListener('click', () => {
        clickText.remove();
        catGif.style.display = 'block';
        doaAudio.currentTime = 0;
        doaAudio.play().catch(() => { });
    });
});