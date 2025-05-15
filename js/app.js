//Re-reviewed Intro to JS, Arrays, Objects, Intro to DOM, and DOM Events as of 5/4/2025 
//and will be completing this lesson with my newly re-reviewed understanding of this material.

/*-------------------------------- Constants --------------------------------*/
const winningCombos = [
    [0, 1, 2], // top row
    [3, 4, 5], // middle row
    [6, 7, 8], // bottom row
    [0, 3, 6], // left column
    [1, 4, 7], // middle column
    [2, 5, 8], // right column
    [0, 4, 8], // diagonal top-left to bottom-right
    [2, 4, 6]  // diagonal top-right to bottom-left
  ];
  
  /*---------------------------- Variables (state) ----------------------------*/
  let board;
  let turn;
  let winner;
  let tie;
  
  /*------------------------ Cached Element References ------------------------*/
  const squareEls = document.querySelectorAll('.sqr');
  const messageEl = document.getElementById('message');
  const resetBtnEl = document.getElementById('reset');
  
  /*-------------------------------- Functions --------------------------------*/
  function init() {
    board = ['', '', '', '', '', '', '', '', ''];
    turn = 'X';
    winner = false;
    tie = false;
    render();
  }
  
  function render() {
    updateBoard();
    updateMessage();
  }
  
  function updateBoard() {
    board.forEach((square, idx) => {
      squareEls[idx].textContent = square;
    });
  }
  
  function updateMessage() {
    if (!winner && !tie) {
      messageEl.textContent = `It's ${turn}'s turn!`;
    } else if (!winner && tie) {
      messageEl.textContent = "Cat's game! It's a tie!";
    } else {
      messageEl.textContent = `Congratulations! ${turn} wins!`;
    }
  }
  
  function handleClick(evt) {
    const squareIdx = parseInt(evt.target.id);
    
    if (board[squareIdx] !== '' || winner) {
      return;
    }
    
    placePiece(squareIdx);
    checkForWinner();
    checkForTie();
    switchPlayerTurn();
    render();
  }
  
  function placePiece(idx) {
    board[idx] = turn;
  }
  
  function checkForWinner() {
    winningCombos.forEach(combo => {
      const [a, b, c] = combo;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        winner = true;
      }
    });
  }
  
  function checkForTie() {
    if (winner) return;
    tie = board.every(square => square !== '');
  }
  
  function switchPlayerTurn() {
    if (winner) return;
    turn = turn === 'X' ? 'O' : 'X';
  }
  
/*----------------------------- Event Listeners -----------------------------*/
  squareEls.forEach(square => {
    square.addEventListener('click', handleClick);
  });
  
  resetBtnEl.addEventListener('click', init);
  
  // Initialize the game
  init();














  

/*------------------------------Code Graveyard ------------------------------*/


/*-------------------------------- Constants --------------------------------*/


/*---------------------------- Variables (state) ----------------------------*/


/*------------------------ Cached Element References ------------------------*/


/*-------------------------------- Functions --------------------------------*/



/*----------------------------- Event Listeners -----------------------------*/



