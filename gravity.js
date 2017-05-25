const canvas = document.getElementById('gravity')
var ctx = canvas.getContext('2d')

var height = 500
var width = 600

canvas.height = height
canvas.width = width

// particles and physics
var numOfParticles = 10
var radius = 5
var gravity = 10
var bounce = .7

function Particle () {
  this.x = Math.floor(Math.random() * width)
  this.y = Math.floor(Math.random() * height / 2)

  this.vx = 0
  this.vy = 0

  this.mass = Math.floor(Math.random() * 1024 << 2)

  let R = Math.random() * 255 >> 0
  let G = Math.random() * 255 >> 0
  let B = Math.random() * 255 >> 0
  let A = Math.random() * 0.5
  this.color = `rgb(${R},${G},${B})`
}

var particles = []
for(let i = 0; i < numOfParticles; i++) {
  particles.push(new Particle)
}
console.log(ctx)


function draw () {
  ctx.clearRect(0, 0, width, height)
  for(let i = 0; i < particles.length; i++) {
    var p = particles[i]
    ctx.beginPath()
    ctx.arc(p.x, p.y, radius, 0, Math.PI*2, false)
    ctx.closePath()
    ctx.fillStyle = p.color
    ctx.fill()

    //move 
    p.x += p.vx
    p.y += p.vy

    //
    p.vy += gravity * .1

    if(p.y + radius > height) p.vy = -p.vy * bounce
    if(p.y + radius > height && p.vy < .000000001) {
      p.y = height
    }
  }


  window.requestAnimationFrame(draw)
}
window.requestAnimationFrame(draw)