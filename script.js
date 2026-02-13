function updateTimer() {
  const now = new Date();
  const year = now.getFullYear();
  const end = new Date(year, 1, 14, 23, 59, 59); // Feb = 1

  const diff = end - now;
  const timerEl = document.getElementById("timer");
  const messageEl = document.getElementById("message");

  if (diff <= 0) {
    timerEl.innerText = "00:00:00";
    messageEl.classList.remove("hidden");
    return;
  }

  const hours = String(Math.floor(diff / (1000 * 60 * 60))).padStart(2, "0");
  const minutes = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, "0");
  const seconds = String(Math.floor((diff / 1000) % 60)).padStart(2, "0");

  timerEl.innerText = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateTimer, 1000);
updateTimer();