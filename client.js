console.log("Hell0 world!")

//let number = "6"
//create variable for button elemenet
let $button = document.getElementById("addTodo")
let $textBox= document.getElementById("userInput")
let $list= document.getElementById("list")

//set function as click handler
$button.onclick = addTodo

function addTodo() {
    console.log("button clicked")
    $button.style.backgroundColor = "red"

    //get text from textbox
    let newTodoText = $textBox.value 
    //create new list item
    let $newTodo = document.createElement("li")
    $newTodo.innerHTML = newTodoText
    //put list item in list
    $list.append($newTodo)

}   

//variable for h1
let $app = document.getElementById("app")
//connect changeColor function as click handler
$app.onclick = changeColor
//define changeColor function
function changeColor() {
    //set Color (text) of h1 to yellow
    $app.style.color = "yellow"
}