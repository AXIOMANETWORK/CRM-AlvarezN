let navExpand = document.querySelector(".nav-expand");
let main = document.querySelector(".expand-main");
let iconos = document.querySelectorAll(".item");
let menu =document.querySelectorAll(".expand-menu"); 

navExpand.addEventListener("click", () => {
    main.classList.toggle("close-main");
    iconos.forEach((item)=>
        item.classList.toggle("item-close")
    );

    menu.forEach((item)=>
        item.classList.toggle("close-menu")
    );
  });