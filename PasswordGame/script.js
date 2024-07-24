// script.js

const passwordSets = [
    {
        password: "securepassword",
        hints: [
            "Hint 1: The password is very secure.",
            "Hint 2: It has 14 characters.",
            "Hint 3: It contains the word 'password'.",
            "Hint 4: It starts with 's' and ends with 'd'.",
            "Hint 5: The entire password is 'securepassword'."
        ]
    },
    {
        password: "opentechnology",
        hints: [
            "Hint 1: It involves opening something.",
            "Hint 2: It has 15 characters.",
            "Hint 3: It relates to the field you work in.",
            "Hint 4: It starts with 'open' and ends with 'y'.",
            "Hint 5: The entire password is 'opentechnology'."
        ]
    },
    {
        password: "redhatserver",
        hints: [
            "Hint 1: It’s something you manage.",
            "Hint 2: It has 13 characters.",
            "Hint 3: It’s related to a popular Linux distribution.",
            "Hint 4: It starts with 'red' and ends with 'ver'.",
            "Hint 5: The entire password is 'redhatserver'."
        ]
    }
];

// Randomly select a password set
const randomSet = passwordSets[Math.floor(Math.random() * passwordSets.length)];
const correctPassword = randomSet.password;
const hints = randomSet.hints;

let attempts = 0;

function disableInput() {
    document.getElementById('passwordInput').disabled = true;
    document.querySelector('button').disabled = true;
}

function checkPassword() {
    const userInput = document.getElementById("passwordInput").value;
    const hintElement = document.getElementById("hint");

    if (userInput === correctPassword) {
        hintElement.style.color = "green";
        hintElement.textContent = "Correct! You've guessed the password.";
        disableInput();
    } else {
        hintElement.style.color = "red";
        if (attempts < hints.length) {
            hintElement.textContent = hints[attempts];
            attempts++;
        } else {
            hintElement.textContent = "No more hints available.";
        }
    }
}
