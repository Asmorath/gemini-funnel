// Countdown Timer Script
const countdown = () => {
  const friday = new Date();
  friday.setDate(friday.getDate() + ((5 - friday.getDay() + 7) % 7)); // next Friday
  friday.setHours(20, 0, 0, 0); // 8 PM MST
  const now = new Date();
  const diff = friday - now;

  if (diff <= 0) {
    document.getElementById("timer").innerText = "🎉 Live Now!";
    return;
  }

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);

  document.getElementById("timer").innerText = `${d}d ${h}h ${m}m ${s}s`;
  setTimeout(countdown, 1000);
};
countdown();
