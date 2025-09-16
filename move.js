function move(event) {
    moveNumber++
    const curValue = event.currentTarget
    let index = curValue.dataset.index
    let movingPlayer = document.querySelector('.move')

    let row = Math.floor(index / 3)
    let column = Math.floor(index % 3)
    let diagonal
    if (row === column)
        diagonal = 0
    else if (row + column === 2)
        diagonal = 1

    if (mover === true) {
        rows[row] += 1
        columns[column] += 1
        if (diagonal !== undefined) diagonals[diagonal] += 1
        if (row === 1 && column === 1) diagonals[1] += 1

        curValue.classList.toggle('red')
        curValue.textContent = '×'
        movingPlayer.textContent = 'Ходит ○'
        mover = false
    } else {
        rows[row] -= 1
        columns[column] -= 1
        if (diagonal !== undefined) diagonals[diagonal] -= 1
        if (row === 1 && column === 1) diagonals[1] -= 1

        curValue.classList.toggle('blue')
        curValue.textContent = '○'
        movingPlayer.textContent = 'Ходит ×'
        mover = true
      }

    curValue.removeEventListener('click', move)

    if (rows.includes(3) || columns.includes(3) || diagonals.includes(3)) {
        countX += 1
        window.setTimeout(() => {
            alert(`× победили!`)
            playerWins[0].textContent = countX
            movingPlayer.textContent = 'Ходит ×'
            gameOver()
        }, 200)
    }
    else if (rows.includes(-3) || columns.includes(-3) || diagonals.includes(-3)) {
        countO += 1
        window.setTimeout(() => {
            alert(`○ победили!`)
            playerWins[1].textContent = countO
            movingPlayer.textContent = 'Ходит ×'
            gameOver()
        }, 200)
    }
    else if (moveNumber === 9) {
        alert(`Ничья!`)
        window.setTimeout(() => {
            movingPlayer.textContent = 'Ходит ×'
            gameOver()
        }, 200)
    }
}