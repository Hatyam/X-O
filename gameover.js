function gameOver() {
    squares.forEach((curValue) => curValue.textContent = '')
    rows.fill(0)
    columns.fill(0)
    diagonals.fill(0)
    moveNumber = 0
    mover = true
    squares.forEach((square) => {
        if (square.classList.contains('blue'))
            square.classList.toggle('blue')
        else if (square.classList.contains('red'))
            square.classList.toggle('red')
        square.addEventListener('click', move)
    })
}