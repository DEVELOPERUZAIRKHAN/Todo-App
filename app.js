const todoInputEl = document.querySelector(".todo__input")
const todoItemEls = document.querySelectorAll(".todo__item")
const todoListEl = document.querySelector(".todo__list")
// const firstEl=document.querySelector(".first")
// const secondEl=document.querySelector(".second")



todoInputEl.addEventListener("keypress",function(e) {
    if (e.keyCode===13) {
       const value=todoInputEl.value
       if (value.length>0) {
        
           todoListEl.insertBefore(createElem(value),todoListEl.firstElementChild)
        }
           todoInputEl.value=""
    }
})



function firstEL(value) {
    const elem =document.createElement("span")
    elem.classList.add("first")
    elem.textContent=value
    console.log(value)
    return elem
}




function secondEl(){
const elem =document.createElement("span")
elem.innerHTML="&#10005;"
elem.classList.add("second")
return elem
}



function createElem(value){
const elem= document.createElement("li")
elem.classList.add("todo__item")
// let val=firstEL(value)
elem.appendChild(firstEL(value))
elem.appendChild(secondEl())
return elem
}










todoListEl.addEventListener("click",(e)=>{
    // if(e.target.classList.contains("todo__item")){       
    //     e.target.firstElementChild.classList.toggle("done")
    // }
 if(e.target.classList.contains("first")){
        
        e.target.classList.toggle("done")
    }
    else if(e.target.classList.contains("second")){
        e.target.parentNode.remove()
    }
})