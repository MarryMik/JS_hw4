const butns = document.getElementsByClassName("testimonials__button");
const commentSection = document.getElementsByClassName("testimonials__comments-section")[0];
const rightButnIcon =document.getElementsByClassName("test-butn__icon_right")[0];
const leftButnIcon =document.getElementsByClassName("test-butn__icon_left")[0];


function addComment( userName, userJpb, text, userPhoto){
    const commentBox = document.createElement("div");
    const photoWrap = document.createElement("div");
    const avatar = document.createElement("img");
    const headerWrap = document.createElement("div");
    const wrapPrimary = document.createElement("div");
    const name = document.createElement("p");
    const jobTitle = document.createElement("p");
    const quotes = document.createElement("p");
    const textWrap = document.createElement("div");
    const commentText = document.createElement("p");

    commentBox.classList.add("comment-box");
    photoWrap.classList.add("comment-box__photo-wrap");
    avatar.classList.add("comment-box__photo");
    headerWrap.classList.add("comment-box__header-wrap");
    wrapPrimary.classList.add("header__wrap_primary");
    name.classList.add("comment-box__name");
    jobTitle.classList.add("comment-box__job-title");
    quotes.classList.add("comment-box__quotes");
    textWrap.classList.add("comment-box__text-wrap");
    commentText.classList.add("comment-box__text");

    avatar.src=userPhoto;
    name.innerText=userName;
    jobTitle.innerText=userJpb;
    quotes.innerText="”";
    commentText.innerText=text;

    textWrap.append(commentText);
    wrapPrimary.append(name);
    wrapPrimary.append(jobTitle);
    headerWrap.append(wrapPrimary);
    headerWrap.append(quotes);
    photoWrap.append(avatar);
    commentBox.append(photoWrap);
    commentBox.append(headerWrap);
    commentBox.append(textWrap);
    commentSection.append(commentBox);
}

function hideOrShow(elem){
    if(elem.style.display=="none"){
        elem.style.display="block";
    }if(elem.style.display=="block"){
        elem.style.display="none";
    }
}

 fetch ('http://localhost:3000/views')
     .then(response => response.json())
     .then(json =>{
        console.log("fetch2");
        newComments =json;
        newComments.forEach(elem => {
            return addComment(elem.userName, elem.userJob, elem.text, elem.userPhoto);
        })
     })

     const buttonLeft = butns[0];
     const buttonRight = butns[1];

     buttonLeft.addEventListener('mouseover', function(){
            buttonLeft.style.backgroundColor="#37806B";
            leftButnIcon.src="img/butn-arrow-pressed.svg";
            leftButnIcon.style.transform="rotate(180deg)";

     });
     buttonLeft.addEventListener('mouseout', function(){
        buttonLeft.style.backgroundColor="#FFFFFF";
        leftButnIcon.src="img/butn-arrow.svg";
        leftButnIcon.style.transform="rotate(0deg)";
     });
     buttonRight.addEventListener('mouseover', function(){
        
            buttonRight.style.backgroundColor="#37806B";
            rightButnIcon.src="img/butn-arrow-pressed.svg";
            rightButnIcon.style.transform="rotate(0deg)";
        
     });
     buttonRight.addEventListener('mouseout', function(){
        buttonRight.style.backgroundColor="#FFFFFF";
            rightButnIcon.src="img/butn-arrow.svg";
            rightButnIcon.style.transform="rotate(180deg)";
     });

     buttonLeft.addEventListener('click', function(){
        const arrayOfComments = document.getElementsByClassName("comment-box");
            switch(true){
                case Array.from(buttonLeft.classList).includes('stage1') : 
                    buttonLeft.classList.add('stage3');
                    buttonLeft.classList.remove('stage1');
                    buttonRight.classList.add('stage3');
                    buttonRight.classList.remove('stage1');
                    switchCommentPage(3,arrayOfComments,"left");
                    break;
                case Array.from(buttonLeft.classList).includes('stage2'):
                    buttonLeft.classList.add('stage1');
                    buttonLeft.classList.remove('stage2');
                    buttonRight.classList.add('stage1');
                    buttonRight.classList.remove('stage2');
                    switchCommentPage(1,arrayOfComments,"left");
                    break;
                case Array.from(buttonLeft.classList).includes('stage3'):
                    buttonLeft.classList.add('stage2');
                    buttonLeft.classList.remove('stage3');
                    buttonRight.classList.add('stage2');
                    buttonRight.classList.remove('stage3');
                    switchCommentPage(2,arrayOfComments,"left");
                    break;
                
            }
     });

     buttonRight.addEventListener('click', function(){
        const arrayOfComments = document.getElementsByClassName("comment-box");
            switch(true){
                case Array.from(buttonRight.classList).includes('stage1') : 
                    buttonRight.classList.add('stage2');
                    buttonRight.classList.remove('stage1');
                    buttonLeft.classList.add('stage2');
                    buttonLeft.classList.remove('stage1');
                    switchCommentPage(1,arrayOfComments,"right");
                    break;
                case Array.from(this.classList).includes('stage2'):
                    buttonRight.classList.add('stage3');
                    buttonRight.classList.remove('stage2');
                    buttonLeft.classList.add('stage3');
                    buttonLeft.classList.remove('stage2');
                    switchCommentPage(2,arrayOfComments,"right");
                    break;
                case Array.from(this.classList).includes('stage3'):
                    buttonRight.classList.add('stage1');
                    buttonRight.classList.remove('stage3');
                    buttonLeft.classList.add('stage1');
                    buttonLeft.classList.remove('stage3');
                    switchCommentPage(3,arrayOfComments,"right");
                    break;
            }
       
     });
    
     function switchCommentPage(stage,arrayOfComments, direction){
        let d1;
        let d2;
        if(direction=="right"){
            d1="none";
            d2="block";
        }else{
            d1="block";
            d2="none";
        }
        switch(true){
            case stage===1:
                arrayOfComments[0].style.display=d1;
                arrayOfComments[1].style.display=d1;
                arrayOfComments[2].style.display=d2;
                arrayOfComments[3].style.display=d2;
                break;
            case stage===2:
                arrayOfComments[2].style.display=d1;
                arrayOfComments[3].style.display=d1;
                arrayOfComments[4].style.display=d2;
                arrayOfComments[5].style.display=d2;
                break;
            case stage===3:
                arrayOfComments[4].style.display=d1;
                arrayOfComments[5].style.display=d1;
                arrayOfComments[0].style.display=d2;
                arrayOfComments[1].style.display=d2;
                break;
        }
     }




