const features = [
  "FE (Featuring Enabling)",
  "Undetected Features",
  "Multi Game Support",
  "Always Updating With More Game Support",
  "Custom Scripts",
  "Custom Name Tags Others Using The Script Can See",
  "UGC emote script",
  "Emote Script With Every Desire For Every Need",
  "Anti Chat logger Allowing Un bannable Experience With Chats",
  "Custom Api's",
  "Fastest Vc Unsuspension",
  "Script And Executor Compatibility",
];

const track = document.getElementById("carousel-track");

features.concat(features).forEach(text => {
  const el = document.createElement("div");
  el.className = "carousel-item";
  el.textContent = text;
  track.appendChild(el);
});

let offset = 0;
let speed = 0.15; 
let itemHeight;

function measure() {
  const first = track.firstElementChild;
  if (!first) return;
  const style = window.getComputedStyle(first);
  const mt = parseFloat(style.marginTop);
  const mb = parseFloat(style.marginBottom);
  itemHeight = first.getBoundingClientRect().height + mt + mb;
}
measure();
window.addEventListener("resize", measure);

function loop() {
  offset -= speed;
  if (Math.abs(offset) >= itemHeight) {
    track.appendChild(track.firstElementChild);
    offset += itemHeight;
  }
  track.style.transform = `translateY(${offset}px)`;
  requestAnimationFrame(loop);
}
requestAnimationFrame(loop);

const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
let stars = [];

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  stars = Array.from({ length: 120 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 1.2,
    speed: Math.random() * 0.4 + 0.05
  }));
}
resize();
window.addEventListener("resize", resize);

function animateStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#fff";
  stars.forEach(s => {
    ctx.globalAlpha = 0.5 + Math.random() * 0.5;
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
    ctx.fill();
    s.y += s.speed;
    if (s.y > canvas.height) s.y = -2;
  });
  requestAnimationFrame(animateStars);
}
animateStars();
