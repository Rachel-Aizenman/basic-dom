//Spot Check 1
// let down = document.getElementById("down")
// console.log(down.innerHTML)
// down.innerHTML = "down"

//Spot Check 2
// let playingField = document.getElementById("playing-field")
// console.log(playingField)
// // console.log(playingField.innerHTML)
// document.getElementById("block").style.backgroundColor = "yellow"
 
//Spot Check 3
// const moveRight = function(){
//     let ball = document.getElementById("block")
//     let avi = parseInt(ball.style.left) || 0
//     avi += 15 
//     ball.style.left = avi + "px"

// //Spot Check 4
// const header = document.createElement("h1")
// header.innerHTML = "The Best Game Ever"
// header.style.color = "#c0392b"
// header.style.fontFamily = "Helvetica"
// document.body.appendChild(header)

// const subHeader = document.createElement("h2")
// subHeader.innerHTML = "for real"
// document.body.appendChild(subHeader)

//Spot Check 5
// const box = document.getElementById("box")

// const enterColor = function () {
//     box.style.backgroundColor = "#c0392b"
//     box.innerHTML = "AHH GO AWAY"
// }

// const leaveColor = function () {
//     box.style.backgroundColor = "#1abc9c"
//     box.innerHTML = "Hover over me!"
// }
// const clickColor = function (){
//     box.style.backgroundColor = "#8e44ad"
// }

//Spot Check 6
// const list = document.getElementById("myList")
// const addItem = function () {
//     const newItem = document.createElement("li")
//     newItem.innerHTML = "A new item!"
//     list.appendChild(newItem)
// }
const box = document.getElementById("box")
box.onclick = function () {
    box.innerHTML = "clicked"
}

