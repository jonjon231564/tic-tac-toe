document.addEventListener('DOMContentLoaded', function() {
    function displayTicTacToe() {
        const squareContainer = document.createElement('div')
        squareContainer.id = 'square-container'
        document.body.appendChild(squareContainer)

        let display = document.createElement('p')
        display.id = 'display'
        document.body.appendChild(display)
        display.textContent = 'Player1 choose a square'

        const gameArray = ['', '', '', '', '', '', '', '', '']
        console.log(gameArray)

        let currentMark = 'O'

        const player1 = {
            name: 'player1',
            mark: 'X'
        }
        const player2 = {
            name: 'player2',
            mark: 'O'
        }

        function checkWinningSets() {
            let a = 0
            let b = 1
            let c = 2
            let player1Won = false
            let player2Won = false
            for (i = 0; i < 3; i++) {
                if (gameArray[a].textContent === player1.mark && gameArray[b].textContent === player1.mark && gameArray[c].textContent === player1.mark) {
                    player1Won = true
                } else if (gameArray[a].textContent === player2.mark && gameArray[b].textContent === player2.mark && gameArray[c].textContent === player2.mark) {
                    player2Won = true
                } 
                a += 3
                b += 3
                c += 3
            }
            a = 0
            b = 3
            c = 6
    
            for (i = 0; i < 3; i++) {
                if (gameArray[a].textContent === player1.mark && gameArray[b].textContent === player1.mark && gameArray[c].textContent === player1.mark) {
                    player1Won = true
                } else if (gameArray[a].textContent === player2.mark && gameArray[b].textContent === player2.mark && gameArray[c].textContent === player2.mark) {
                    player2Won = true
                } 
                a++
                b++
                c++
            }
            a = 0
            b = 4
            c = 8
            for (i = 0; i < 2; i++) {
                let a = 0
                let b = 4
                let c = 8
        
                if (gameArray[a].textContent === player1.mark && gameArray[b].textContent === player1.mark && gameArray[c].textContent === player1.mark) {
                    player1Won = true
                } else if (gameArray[a].textContent === player2.mark && gameArray[b].textContent === player2.mark && gameArray[c].textContent === player2.mark) {
                    player2Won = true
                } 
                a = 2
                b = 4
                c = 6
            }
            if (gameArray[0].textContent != '' && gameArray[1].textContent != '' && gameArray[2].textContent != '' && gameArray[3].textContent != '' && gameArray[4].textContent != '' && gameArray[5].textContent != '' && gameArray[6].textContent != '' && gameArray[7].textContent != '' && gameArray[8].textContent != '') {
                return 'tie'
            }
            if (player1Won === true) {
                return 'player1 won'
            } else if (player2Won === true) {
                return 'player2 won'
            }

        }


        let newGame = document.createElement('button')
        newGame.id = 'newGame'
        newGame.textContent = 'New Game'
        document.body.appendChild(newGame)


        

        gameArray.forEach(createElementAndAddEventListener)

        function createElementAndAddEventListener(element, index) {
            gameArray[index] = document.createElement('button')
            gameArray[index].id = `square${index}`
            squareContainer.appendChild(gameArray[index])

            document.getElementById('newGame').addEventListener('click', function() {
                location.reload()
            })

            gameArray[index].addEventListener('click', function() {
                
                
                if (gameArray[index].textContent === '') {
                    if (currentMark === 'X') {
                        display.textContent = 'Player1 choose a square'
                        currentMark = 'O'
                    } else if (currentMark === 'O') {
                        display.textContent = 'Player2 choose a square'
                        currentMark = 'X'
                    }
                    gameArray[index].textContent = currentMark
                    this.classList.toggle('active');
                    checkWinningSets()
                    if (checkWinningSets() === 'player1 won') {
                        display.textContent = 'player 1 wins'
                        squareContainer.remove()
                    } else if (checkWinningSets() === 'player2 won') {
                        display.textContent = 'player 2 wins'
                        squareContainer.remove()
                    } else if (checkWinningSets() === 'tie') {
                        display.textContent = 'tie'
                        squareContainer.remove()
                    }
                } else {
                    display.textContent = 'pick an empty square'
                }

                
                
                
                
            })
        }
    }
    displayTicTacToe()
})
