let btn = document.getElementById("btn");
let output = document.getElementById("output");
let userInput = document.getElementById("userInput");
let attempts = 0;
const maxAttempts = 10;
const number = Math.floor(Math.random() * 100);
const guesses = [];

btn.addEventListener("click", () => {
    if (attempts >= maxAttempts) {
        output.innerHTML = "You've reached the maximum number of attempts.";
        disableInputAndButton();
        return;
    }

    const input = parseInt(userInput.value);

    if (isNaN(input)) {
        output.innerHTML = "Please enter a valid number.";
        return;
    }

    attempts++;
    guesses.push(input);

    if (input === number) {
        output.innerHTML = `<h2>Congrats!! ${number} is correct </h2>`;
        disableInputAndButton();
    } else {
        output.innerHTML = input < number ? "You guessed too low !!" : "You guessed too high !!";
        output.innerHTML += `<br>Attempts left: ${maxAttempts - attempts}`;
        output.innerHTML += `<br>Previous guesses: ${guesses.join(', ')}`;
        userInput.value = '';
    }
});

function disableInputAndButton() {
    userInput.disabled = true;
    btn.disabled = true;
}