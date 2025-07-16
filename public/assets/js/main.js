const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Get Vimeo iframe and create a Player instance
const iframe = document.getElementById("vimeo-player");
const player = new Vimeo.Player(iframe);

// Mute/Unmute Elements
const muteToggle = document.getElementById("mute-toggle");
const iconOn = document.getElementById("volume-on");
const iconOff = document.getElementById("volume-off");

let isMuted = false; // Initial mute state

// Set video to muted on load
player.setVolume(0);

// Toggle logic
muteToggle.addEventListener("click", async () => {
  try {
    if (isMuted) {
      await player.setVolume(1);
      iconOn.style.display = "inline";
      iconOff.style.display = "none";
    } else {
      await player.setVolume(0);
      iconOn.style.display = "none";
      iconOff.style.display = "inline";
    }
    isMuted = !isMuted;
  } catch (error) {
    console.error("Mute toggle failed:", error);
  }
});
// Update icon on load
iconOn.style.display = "none";
iconOff.style.display = "inline";
