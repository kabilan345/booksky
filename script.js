//action on + button
var popupbox=document.querySelector(".popup-box")
var popupoverlay=document.querySelector(".popup-overlay")
var button=document.getElementById("add-icon")

button.addEventListener("click",function(){
    popupbox.style.display="block"
    popupoverlay.style.display="block"
})

//action on cancel button
var cancelbtn=document.getElementById("cancel-book")

cancelbtn.addEventListener("click",function(event){
    event.preventDefault()
    popupbox.style.display="none" 
    popupoverlay.style.display="none"   
})


//action on add button
var container=document.querySelector(".container")
var addbtn=document.getElementById("add-book")
var booktitleinput=document.getElementById("book-title-input")
var bookauthorinput=document.getElementById("book-author-input")
var bookdescriptioninput=document.getElementById("book-description-input")

addbtn.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","box-container")
    div.innerHTML=`<h1>${booktitleinput.value}</h1>
    <h4>${bookauthorinput.value}</h4>
    <p>${bookdescriptioninput.value}</p>
    <button onclick="deletebook(event)">DELETE</button>`
    container.append(div)
    popupbox.style.display="none" 
    popupoverlay.style.display="none" 
    booktitleinput.value = "";
    bookauthorinput.value = "";
    bookdescriptioninput.value = "";

})

//action on delete button

function deletebook(event){
    event.target.parentElement.remove()
}