var popupOverlay = document.querySelector(".popup-overlay")
var popupBox = document.querySelector(".popup-box")
var addpopupbutton = document.getElementById("add popup-button")
var cancelpopup = document.getElementById("cancel-popup")

addpopupbutton.addEventListener("click",function(){
    popupOverlay.style.display = "block"
    popupBox.style.display = "block"
})

cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
    popupOverlay.style.display = "none"
    popupBox.style.display = "none"


})

//function to add
var container = document.querySelector(".container")
var addbook = document.getElementById("add-book")
var booktitleinput = document.getElementById("book-title-input")
var bookauthorinput = document.getElementById("book-author-input")
var bookdescriptioninput = document.getElementById("book-description-input")

addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML = `<h2>${booktitleinput.value}</h2>
    <h5>${bookauthorinput.value}</h5>
    <p>${bookdescriptioninput.value}</p>
    <button onclick="deleteBook(event)">Delete</button>`
    container.append(div)
    popupOverlay.style.display="none"
    popupBox.style.display = "none"

})
function deleteBook(event){
    event.target.parentElement.remove()

}