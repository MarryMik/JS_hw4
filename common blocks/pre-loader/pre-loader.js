const mainElements = Array.from(document.getElementsByClassName("section"));
const preload = document.getElementsByClassName("pre-loader")[0];
function swithcDispalyAllContend(display){    
    if(display=="none"){
        mainElements.forEach((el)=>{el.classList.add('none')});
    }
    if(display=="block"){
        mainElements.forEach((el)=>{el.classList.remove('none')});

    }
    
}

function preLoad(time){
    swithcDispalyAllContend("none");
    setTimeout(()=>{
        preload.style.display="none";
        swithcDispalyAllContend("block");
    }, time);
}

preLoad(5000);