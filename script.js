// Toggle scroll reveal
function toggleScroll() {
  const scroll = document.getElementById("hiddenScroll");
  scroll.classList.toggle("hidden");
}

// Audio switching logic
function switchAudio(selected) {
  const audio = document.getElementById("bgAudio");
  const source = audio.querySelector("source");

  const audioMap = {
    "main-theme": "assets/audio/main-theme.mp3",
    "mystic-waters": "assets/audio/mystic-waters.mp3",
    "celestial-drift": "assets/audio/celestial-drift.mp3",
  };

  source.src = audioMap[selected];
  audio.load(); // Reload the new source
  audio.play(); // Start playing the new track
}
