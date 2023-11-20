var pluss = document.querySelector(".plus")
var overlay = document.querySelector(".over")
var popupp = document.querySelector(".popup")
pluss.addEventListener("click",function(){
   overlay.style.display="block"
   popupp.style.display="block"
})

var canbok = document.getElementById("canbk")
canbok.addEventListener("click",function(event){
    event.preventDefault()
    overlay.style.display="none"
    popupp.style.display="none"
})

var container = document.querySelector(".content")
var addbok = document.getElementById("addbk")
var bookt = document.getElementById("bktit")
var booka = document.getElementById("bkau")
var bookd = document.getElementById("bkdes")

addbok.addEventListener("click",function(event)
{
    event.preventDefault()
    var divv = document.createElement("div")
    divv.setAttribute("class","hasim")
    divv.innerHTML= `<h3>${bookt.value}</h3><h5>${booka.value}</h5>
    <p>${bookd.value}</p>
    <button class="bookdel" onclick="del(event)">Delete</button>`
    overlay.style.display="none"
    popupp.style.display="none"
    container.append(divv)
})
function del(event)
{
    event.target.parentElement.remove()
}