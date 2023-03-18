
const newsSection = document.getElementsByClassName("news")[0];
const news = document.getElementsByClassName("news__box");
const newsPicture = document.getElementsByClassName("news__picture-wrap");
const newsTitle = document.getElementsByClassName("news__title");
const newsText =  document.getElementsByClassName("news__text-wrap");

window.addEventListener('scroll', function(){
    let rect = newsSection.getBoundingClientRect();
    if(rect.top<=172 && rect.top>=-811){
        Array.from(news).forEach((el,ind)=>{
            el.classList.remove("news_picture-hide");
            el.classList.add("news_picture-show");
        })
    }else{
        Array.from(news).forEach((el,ind)=>{
            el.classList.add("news_picture-hide");
            el.classList.remove("news_picture-show");
        })
    }
});


newsPicture[0].addEventListener('mouseover', function(){
    newsPicture[0].classList.add('news-img-biggerer');
    newsPicture[0].classList.remove('news-img-smaller');
    newsTitle[0].classList.add("news-text-show");
    newsText[0].classList.add("news-text-show");
    newsTitle[0].classList.remove("news-text-hide");
    newsText[0].classList.remove("news-text-hide");

});
newsPicture[0].addEventListener('mouseout', function(){
    newsPicture[0].classList.add('news-img-smaller');
    newsPicture[0].classList.remove('news-img-biggerer');
    newsTitle[0].classList.add("news-text-hide");
    newsText[0].classList.add("news-text-hide"); 
    newsTitle[0].classList.remove("news-text-show");
    newsText[0].classList.remove("news-text-show");
})

newsPicture[1].addEventListener('mouseover', function(){
    newsPicture[1].classList.add('news-img-biggerer');
    newsPicture[1].classList.remove('news-img-smaller');
    newsTitle[1].classList.add("news-text-show");
    newsText[1].classList.add("news-text-show");
    newsTitle[1].classList.remove("news-text-hide");
    newsText[1].classList.remove("news-text-hide");
});
newsPicture[1].addEventListener('mouseout', function(){
    newsPicture[1].classList.add('news-img-smaller');
    newsPicture[1].classList.remove('news-img-biggerer');
    newsTitle[1].classList.add("news-text-hide");
    newsText[1].classList.add("news-text-hide"); 
    newsTitle[1].classList.remove("news-text-show");
    newsText[1].classList.remove("news-text-show");
})