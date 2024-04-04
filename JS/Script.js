


document.addEventListener("DOMContentLoaded", function () {

    let up = document.getElementById("up")

    up.addEventListener("click", () => {

        window.scrollTo({ top: 0, behavior: "smooth" });

    });


    function scroolevent() {

    

        if (document.documentElement.scrollTop === 0) {
    
            up.style.display = "none"
    
       let x = setTimeout(() => {
                location.reload()
                // Window.reload()
            },1000);

            clearTimeout({x},1000);
           
        }
        
        else {
            false
        }
    
    
    }
    
    
    window.addEventListener("scroll", function(){
    
        scroolevent();
    
    });
    
    
    scroolevent();
   

});


let menuicon = document.getElementById("menu-icon");

let slidmenu = document.getElementById("slide-menu");

let close = document.getElementById("close")

menuicon.addEventListener("click",function(){

    slidmenu.style.marginLeft = "0px"
    slidmenu.style.transition = "2s"
    slidmenu.style.opacity = "1"

});

close.addEventListener("click", function(){

    slidmenu.style.marginLeft = "980px"
    slidmenu.style.transition = "2.5s"
    slidmenu.style.opacity = "0"

})


