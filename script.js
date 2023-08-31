let burger = document.querySelector(".burger")
let ul1 = document.querySelector(".headerName")
let menu = document.querySelector(".menu")
let ul2 = document.querySelector(".headerUl2")
let close = document.querySelector(".close")
let lists = document.querySelectorAll(".headerUl2 li")

function func(){
    let ok = true ;
    burger.addEventListener("click" , function(){
        ok = !ok
        menu.style.display = "flex"
        ul2.classList.toggle("show")
        if(ok === false){
            burger.setAttribute("src","icone-fermer-et-x-noir-1-removebg-preview.png");
            burger.style.height = "45px"
            burger.style.width = "50px"
            burger.style.marginRight = "25px"
            ul1.style.borderBottom = "1px solid black" ;
        }if(ok === true){
            burger.setAttribute("src","images-removebg-preview.png")
            burger.style.height = "35px"
            burger.style.width = "45px"
            burger.style.marginRight = "30px"
            ul1.style.borderBottom = "none" ;
        }
    })
    
    for (let i = 0; i < lists.length; i++) {
        const element = lists[i];
        element.addEventListener("click",function(){
            ul2.classList.toggle("show");
            burger.setAttribute("src","images-removebg-preview.png")
        })
    }
}
func()