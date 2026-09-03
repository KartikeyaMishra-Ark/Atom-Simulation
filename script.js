const canvas = document.getElementById("background");

const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.arc(200, 200, 50, 0, Math.PI)
ctx.fill();