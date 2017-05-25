const canvas = document.getElementById('friction')
const ctx = canvas.getContext('2d')

const width = 550
const height = 400
const max_velocity = 10
const radius = 5
const friction = 0.99

canvas.height = height
canvas.width = width


const particles = [] 
const amount = 10

for(let i = 0; i < amount; i++) {
  particles.push(new createParticle())
}


function createParticle() {
  this.x = Math.random() * width
  this.y = Math.random() * height

  this.vx = Math.random() * max_velocity
  this.vy = Math.random() * max_velocity

  let R = Math.random() * 255 >> 0
  let G = Math.random() * 255 >> 0
  let B = Math.random() * 255 >> 0
  let A = Math.random() * 0.5

  this.color = `rgb(${R},${G},${B})`
}

function draw () {
  ctx.clearRect(0, 0, width, height)
  for(let t = 0; t < particles.length; t++){
    let p = particles[t]
    
    ctx.beginPath()
    ctx.arc(p.x, p.y, radius, Math.PI*2, false);
    const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, 3);
    gradient.addColorStop(1, p.color)
    ctx.createLinearGradient(p.x, p.y, radius, radius)

    ctx.fillStyle = gradient
    ctx.fill()

    // move with certain velocity
    p.x += p.vx
    p.y += p.vy

    // apply friction
    p.vx *= friction
    p.vy *= friction

    if(p.x > width) p.vx = -p.vx
    if(p.x < 0) p.vx = -p.vx
    if(p.y > height) p.vy = -p.vy
    if(p.y < 0) p.y = p.vy = -p.vy
  }
  window.requestAnimationFrame(draw)
}
window.requestAnimationFrame(draw)
