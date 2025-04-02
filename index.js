//These define the string variables by snipping the HTML lines

let guestScore = document.getElementById("guest-score")
let homeScore = document.getElementById("home-score")

console.log(guestScore)
console.log(homeScore)

let guestCount = 0
let homeCount = 0

//Home Functions

function homeOne() {
    homeCount += 1
    homeScore.textContent = homeCount
}

function homeTwo() {
    homeCount += 2
    homeScore.textContent = homeCount
}

function homeThree() {
    homeCount += 3
    homeScore.textContent = homeCount
}

//Guest Functions


function guestOne() {
    guestCount += 1
    guestScore.textContent = guestCount
}

function guestTwo() {
    guestCount += 2
    guestScore.textContent = guestCount
}

function guestThree() {
    guestCount += 3
    guestScore.textContent = guestCount
}

//Reset scores function

function resetScore() {
    homeCount = 0
    guestCount = 0
    homeScore.textContent = homeCount
    guestScore.textContent = guestCount
}