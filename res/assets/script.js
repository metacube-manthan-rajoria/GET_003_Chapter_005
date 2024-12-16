let navBar = document.getElementById("side_nav");
let navBarButton = document.getElementById("nav_hamburger");
let appWrapper = document.getElementById("app_wrapper");
let sideCloseX = document.getElementById("side_nav_x");
let navIsOpen = true;
navBarButton.addEventListener("click", ()=>{
    navIsOpen = !navIsOpen;
    if(navIsOpen){
        if(window.innerWidth > 780){
            appWrapper.style.gridTemplateColumns = "2fr 10fr";
            navBar.style.display = "none";
        }
        navBar.style.display = "block";
    }else{
        if(window.innerWidth > 780){
            appWrapper.style.gridTemplateColumns = "1fr";
            navBar.style.display = "none";
        }
    }
});

sideCloseX.addEventListener("click", ()=>{
    navIsOpen = !navIsOpen;
    if(navIsOpen){
        navBar.style.display = "block";
    }else{
        navBar.style.display = "none";
    }
});

window.addEventListener("resize", ()=>{
    if(window.innerWidth <= 780){
        appWrapper.style.gridTemplateColumns = "1fr";
    }else{
        if(navIsOpen){
            appWrapper.style.gridTemplateColumns = "2fr 10fr";
            
        }else{
            appWrapper.style.gridTemplateColumns = "1fr";
        }
    }
})

