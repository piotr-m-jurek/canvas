const canvas = document.createElement('canvas')
document.body.appendChild(canvas)
const _width = window.innerWidth - 10
const _height = window.innerHeight - 10
canvas.height = _height
canvas.width = _width
canvas.style.background = "#000"
const ctx = canvas.getContext('2d')

class Circle {
  constructor (x,y,vx,vy) {
    this.x = x
    this.y = y
    this.vx = vx
    this.vy = vy
  }

}



function draw () {
  draw_circle(x, y)
  debugger
}

setInterval(draw, 10)
