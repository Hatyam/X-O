let countX = 0
let countO = 0

const squares = document.querySelectorAll('.square')
const matrix = new Array(9).fill('')
let mover = true

function move(event) {
    const curValue = event.currentTarget

    if (mover === true) {
        curValue.classList.toggle('red')
        curValue.textContent = '×'
        mover = false
    } else {
        curValue.classList.toggle('blue')
        curValue.textContent = '○'
        mover = true
      }

    curValue.removeEventListener('click', move)
}

squares.forEach((square) => {
    square.addEventListener('click', move)
})