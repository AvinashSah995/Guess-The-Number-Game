// Get the DOM elements
const input = document.querySelector("input"),
guess = document.querySelector(".guess"),
button = document.querySelector("button"),
remainChances = document.querySelector(".chance");

// Set focus on input fiels
input.focus();

let randomNum = Math.floor(Math.random() * 100);
chance=10;
remainChances.style.color = "red";
guess.style.color = "#1C59FF";

// Listen the click event on the check button
button.addEventListener("click", () => {

    // Decrease the chance variable on every click
    chance--;

    // Get the input field value
    let inputValue = input.value;

    // Check if the input value is equals to the random number
    if(inputValue == randomNum) {
        // Update guessed number, disable input, check buttom text and color
        [guess.textContent, input.disabled] = ["Congratulation", true];
        [button.textContent, guess.style.color] = ["Replay", "#1C59FF"];
    }

    // check if input value is greater than random number and within 1-99
    else if(inputValue > randomNum && inputValue <100) {
        // update the guess text and remaining chances
        [guess.textContent, remainChances.textContent] = ["Your guess is high", chance];
        guess.style.color = "#1C59FF";
    } 
    
    // check if input value is less than random number and within 1-99
    else if(inputValue < randomNum && inputValue > 0) {
        // update the guess text and remaining chances
        [guess.textContent, remainChances.textContent] = ["Your guess is low", chance];
        guess.style.color = "#1C59FF";
    }
    
    // check if input value is within 1-99
    else {
       // update the guess text and remaining chances
       [guess.textContent, remainChances] = ["Your number is invalid", chance];
       guess.style.color = "#de0611";
    }

    // Check if the chance is zero
    if(chance == 0) {
        // update check button, disable input field, and clear input field
        // update guess number value and color to indicate loss
        [button.textContent, input.disabled, inputValue] = ["Replay", true, ""];
        [guess.textContent, guess.style.color] = ["You lost the game", "#de0611"];
    }

    if(chance < 0) {
        window.location.reload();
    }
 
})