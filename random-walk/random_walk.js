const canvas = document.createElement('canvas')
canvas.id = 'walk'
const ctx = canvas.getContext('2d')
document.body.appendChild(canvas)

const _height = 600
const _width = 800

canvas.height = _height
canvas.width = _width
canvas.style.background = 'rgba(255,255,255, 0)'
canvas.style.border = '1px solid grey'

class Particle {
  constructor (x, y, r) {
    this.x = x
    this.y = y
    this.r = r
  }

  move (toss1, toss2) {
    if (toss1 && toss2) { this.x += 2}
    if (!toss1 && toss2) { this.x -= 2}
    if (toss1 && !toss2) { this.y += 2 }
    if (!toss1 && !toss2) { this.y -= 2}  
  }
  extMove (mx, my) {
    this.x += mx
    this.y += my
  }
}

function coinToss () {
  return Math.random() >= .5
}
function oneToOne () {
  return Math.floor(Math.random() * 3) -1
}
const p = new Particle(_width / 2, _height / 2, 10)

const draw = () => {
  ctx.beginPath()
  ctx.arc(p.x, p.y, p.r, 0, 2 * Math.PI, false)
  ctx.strokeStyle = 'rgba(0,0,0,1)'
  ctx.stroke()
  p.move(coinToss(), coinToss())
  p.extMove(oneToOne(), oneToOne())

  ctx.fillStyle = 'rgba(255,255,255,.1)'
  ctx.fillRect(0, 0, _width, _height)
  requestAnimationFrame(draw) 
}

requestAnimationFrame(draw)
