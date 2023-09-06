let scoreGuest = 0
let scoreHome = 0
let scoreHomeEl = document.getElementById("scorehome-el")
let scoreGuestEl = document.getElementById("scoreguest-el")

function plusOneHome() {
   scoreHome += 1
   scoreHomeEl.textContent = scoreHome
}

function plusTwoHome() {
    scoreHome += 2
    scoreHomeEl.textContent = scoreHome
}

function plusThreeHome() {
    scoreHome += 3
    scoreHomeEl.textContent = scoreHome
}

function plusOneGuest() {
    scoreGuest += 1
    scoreGuestEl.textContent = scoreGuest
}

function plusTwoGuest() {
    scoreGuest += 2
    scoreGuestEl.textContent = scoreGuest
}

function plusThreeGuest() {
    scoreGuest += 3
    scoreGuestEl.textContent = scoreGuest
}