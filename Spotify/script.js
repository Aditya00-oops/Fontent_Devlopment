// Toggle Play/Pause state for both main and bottom player buttons
const playerPlayBtn = document.getElementById('playerPlayBtn');
const mainPlayBtn = document.getElementById('mainPlayBtn');

let isPlaying = false;

function togglePlay() {
    isPlaying = !isPlaying;
    const icon = isPlaying ? '⏸' : '▶';
    playerPlayBtn.textContent = icon;
    mainPlayBtn.textContent = icon;
}

playerPlayBtn.addEventListener('click', togglePlay);
mainPlayBtn.addEventListener('click', togglePlay);

// Interactive Progress Bar (Click to seek)
const progressLine = document.getElementById('progressLine');
const progressFill = document.getElementById('progressFill');

progressLine.addEventListener('click', (e) => {
    const rect = progressLine.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const percentage = (clickX / width) * 100;
    progressFill.style.width = percentage + '%';
});

// Interactive Volume Bar (Click to adjust volume)
const volumeLine = document.getElementById('volumeLine');
const volumeFill = document.getElementById('volumeFill');

volumeLine.addEventListener('click', (e) => {
    const rect = volumeLine.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const percentage = (clickX / width) * 100;
    volumeFill.style.width = percentage + '%';
});