const buttons = document.getElementsByClassName("our-service__filter");
const divParent = document.getElementsByClassName("our-service__cards").item(0);

function addItem(type, title, text){
    //creating
    var newDiv = document.createElement("div"); //maindiv
    const newIcon = document.createElement("img"); //img
    const newDivWrap = document.createElement("div");//wrap
    const newHeader = document.createElement("p");//p1
    const newText = document.createElement("p");//p2
    newHeader.innerText = title;
    newText.innerText=text;

    //adding the classes
    newDiv.classList.add("our-service__card");//maindiv
    newIcon.classList.add("our-service-card__image");//img
    newDivWrap.classList.add("our-service-card__text-wrapper");//wrap
    newHeader.classList.add("our-service-card__header");//p1
    newText.classList.add("our-service-card__text");//p2
    
    //distinguishing by id
    if( type===1){
        newDiv.classList.add("our-service__card_interior");//maindiv
        newIcon.src="img/card-icon-interior.svg";
    }if( type===2){
        newDiv.classList.add("our-service__card_architect");//maindiv
        newIcon.src="img/card-icon-architecture.svg";
        newHeader.classList.add("our-service-card__header_architect");
        newText.classList.add("our-service-card__text_architect");
    }if(type===3){
        newDiv.classList.add("our-service__card_planning");//maindiv
        newIcon.src="img/card-icon-planning.svg";
    }
   
    //appending
    newDiv.append(newIcon);//img
    newDivWrap.append(newHeader);//p1
    newDivWrap.append(newText);//p2
    newDiv.append(newDivWrap);//wrap
    divParent.append(newDiv); //maindiv 
}

fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
        newItems = json;
        newItems.forEach( elem => {
            if(elem.userId==1){
                return addItem(1, elem.title, elem.body);
            }if(elem.userId==2){
                return addItem(2, elem.title, elem.body);
            }if(elem.userId==3){
                return addItem(3, elem.title, elem.body);
            }
        })
       
})

const filter1=document.getElementsByClassName("our-service__filter_primary")[0];
const filter2=document.getElementsByClassName("our-service__filter_secondary")[0];
const filter3=document.getElementsByClassName("our-service__filter_tertiary")[0];
const filter4=document.getElementsByClassName("our-service__filter_quaternary")[0];

window.addEventListener("load", (event) => {
    filter1.click();
  });
filter1.addEventListener('click',function(){
    if(!Array.from(filter1.classList).includes("active")){
        filter1.classList.add("active");
        filter1.children[0].classList.add("active-text");

        filter2.classList.remove("active");
        filter2.children[0].classList.remove("active-text");

        filter3.classList.remove("active");
        filter3.children[0].classList.remove("active-text");

        filter4.classList.remove("active");
        filter4.children[0].classList.remove("active-text");

    
        let arr1=Array.from(document.getElementsByClassName("our-service__card_interior"));
        let arr2=Array.from(document.getElementsByClassName("our-service__card_architect"));
        let arr3=Array.from(document.getElementsByClassName("our-service__card_planning"));
        arr1.forEach(function(el,ind,arr){
            if(ind==arr.length-1) el.style.display="block";
            else el.style.display="none";
        })
        arr2.forEach(function(el,ind,arr){
            if(ind==arr.length-1) el.style.display="block";
            else el.style.display="none";
        })
        arr3.forEach(function(el,ind,arr){
            if(ind==arr.length-1) el.style.display="block";
            else el.style.display="none";
        })
        

    }
    console.log(Array.from(filter1.classList).includes("active"));
    console.log(document.getElementsByClassName("our-service__card_interior"));
});
filter2.addEventListener('click',function(){
    if(!Array.from(filter2.classList).includes("active")){
        filter2.classList.add("active");
        filter2.children[0].classList.add("active-text");

        filter1.classList.remove("active");
        filter1.children[0].classList.remove("active-text");

        filter3.classList.remove("active");
        filter3.children[0].classList.remove("active-text");

        filter4.classList.remove("active");
        filter4.children[0].classList.remove("active-text");

        Array.from(document.getElementsByClassName("our-service__card_interior")).forEach( el=>{
            el.style.display="block";
        });
        Array.from(document.getElementsByClassName("our-service__card_architect")).forEach( el=>{
            el.style.display="none";
        });
        Array.from(document.getElementsByClassName("our-service__card_planning")).forEach( el=>{
            el.style.display="none";
        });
        
    }
});
filter3.addEventListener('click',function(){
    if(!Array.from(filter3.classList).includes("active")){
        filter3.classList.add("active");
        filter3.children[0].classList.add("active-text");

        filter2.classList.remove("active");
        filter2.children[0].classList.remove("active-text");

        filter1.classList.remove("active");
        filter1.children[0].classList.remove("active-text");

        filter4.classList.remove("active");
        filter4.children[0].classList.remove("active-text");

        Array.from(document.getElementsByClassName("our-service__card_architect")).forEach( el=>{
            el.style.display="block";
        });
        Array.from(document.getElementsByClassName("our-service__card_planning")).forEach( el=>{
            el.style.display="none";
        });
        Array.from(document.getElementsByClassName("our-service__card_interior")).forEach( el=>{
            el.style.display="none";
        });
    }
});
filter4.addEventListener('click',function(){
    if(!Array.from(filter4.classList).includes("active")){
       filter4.classList.add("active");
        filter4.children[0].classList.add("active-text");

        filter2.classList.remove("active");
        filter2.children[0].classList.remove("active-text");

        filter3.classList.remove("active");
        filter3.children[0].classList.remove("active-text");

        filter1.classList.remove("active");
        filter1.children[0].classList.remove("active-text");

        Array.from(document.getElementsByClassName("our-service__card_planning")).forEach( el=>{
            el.style.display="block";
        });
        Array.from(document.getElementsByClassName("our-service__card_architect")).forEach( el=>{
            el.style.display="none";
        });
        Array.from(document.getElementsByClassName("our-service__card_interior")).forEach( el=>{
            el.style.display="none";
        });
    }
});

