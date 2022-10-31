//Using QuerySelector to gain access to all the buttons that's going to have functionality
const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const resetButton = document.querySelector('#reset');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const scoreSelect = document.querySelector('#playto');

// define beginning count for players score
let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let isGameOver = false;


//Adding functionality to player 1 & 2 buttons
p1Button.addEventListener('click', function() {
    //if game is over then add one to p1 score
    if(!isGameOver){
       p1Score += 1;
    //if player reaches winning score then display message
       if(p1Score === winningScore) {
            isGameOver = true;
            p1Display.classList.add('has-text-success');
            p2Display.classList.add('has-text-danger')
       }
       //reassign
       p1Display.textContent = p1Score;  
    }
})
p2Button.addEventListener('click', function() {
    if(!isGameOver){
       p2Score += 1;
       if(p2Score === winningScore) {
            isGameOver = true;
            p2Display.classList.add('has-text-success');
            p1Display.classList.add('has-text-danger')
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
       p2Display.textContent = p2Score;  
    }
})
//event listener for setting the game score to what ever the user sets the score to be
scoreSelect.addEventListener('change', function() {
    winningScore = parseInt(this.value);
    reset();
})

//reset button w/function
resetButton.addEventListener('click',reset)

function reset() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove('has-text-success','has-text-danger');
    p2Display.classList.remove('has-text-success','has-text-danger');
    p1Button.disabled = false;
    p2Button.disabled = false;
}
