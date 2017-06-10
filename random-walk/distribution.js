const canvas = document.createElement('canvas')
canvas.id = 'distribution'
const ctx = canvas.getContext('2d')
document.body.appendChild(canvas)

const _height = 600
const _width = 800

canvas.height = _height
canvas.width = _width
canvas.style.background = 'rgb(238, 238, 238)'
canvas.style.border = '1px solid grey'

// class Bar {
//   constructor (x, length) {
//     this.x = x
//     this.y = 0
//     this.length = lenght
//   }
// }

const bars = new Array(10)
bars.fill(0)

const draw = () => {
  ctx.clearRect(0,0,_width, _height)
  ctx.beginPath() 
  for(let i = 0; i < bars.length; i++) {
    ctx.rect((i * (_width / bars.length)), 0, ( _width / bars.length), bars[i] )
  }
  ctx.strokeStyle = 'rgb(0,0,0)'
  ctx.stroke()

  const randomNum = Math.floor(Math.random() * bars.length)
  bars[randomNum] += 1
  console.log(bars)
  requestAnimationFrame(draw)
}

// requestAnimationFrame(draw)
draw()