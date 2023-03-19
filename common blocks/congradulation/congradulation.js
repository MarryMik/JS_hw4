const congrad = document.getElementsByClassName("congratulation")[0];
congrad.style.display="none";
function animationCongrad(time){
    congrad.style.display="flex";
    swithcDispalyAllContend("none");
    setTimeout(()=>{
        congrad.style.display="none";
        swithcDispalyAllContend("block");
    },time)
}


