"use strict"

let image = document.querySelector('#image');
let title = document.querySelector('#title');
let btmYes = document.querySelector('#btmYes');
let btmNo = document.querySelector('#btmNo');
let happySound = new Audio("./access/happy-cat.mp3")
let sadSound = new Audio("./access/crying-sad-cat.mp3")

btmYes.addEventListener('click', () => {
    image.src = "./access/R.gif"
    title.innerHTML= "Aww I love you too"
    sadSound.pause()
    happySound.play()
    happySound.loop = true
})

let btmYesScale = 1;
let btmNoScale = 1;

btmNo.addEventListener('click', () => {
    image.src = "https://i.pinimg.com/originals/4e/e8/07/4ee807eb03d4dd3cd511f2a2a31238c4.gif"
    title.innerHTML = "Oh no, Plese click yes"
    happySound.pause()
    sadSound.play()
    sadSound.loop = true
    btmNoScale -= 0.1;
    btmYesScale += 0.1;
    btmNo.style.transform = `scale(${btmNoScale})`
    btmYes.style.transform = `scale(${btmYesScale})`
});