// Animasi dan Interaktivitas
AOS.init();

// Fungsi Countdown
const countdownDate = new Date("Jun 20, 2025 15:00:00").getTime();
const timer = document.getElementById("timer");

function updateCountdown() {
  const now = new Date().getTime();
  const distance = countdownDate - now;
  
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  timer.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  if (distance < 0) {
    clearInterval(interval);
    timer.innerHTML = "Acara Dimulai!";
  }
}

const interval = setInterval(updateCountdown, 1000);

// Personalize nama tamu
const params = new URLSearchParams(window.location.search);
const guest = params.get("to");
if (guest) {
  document.getElementById("guest-name").textContent = decodeURIComponent(guest);
}

// Fungsi RSVP (Konfirmasi Kehadiran)
document.getElementById("rsvp-button").addEventListener("click", function() {
  alert("Terima kasih telah mengonfirmasi kehadiran Anda!");
});

// Peta Lokasi (Google Maps Embed)
const mapDiv = document.getElementById("map");
mapDiv.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=..." width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>';
