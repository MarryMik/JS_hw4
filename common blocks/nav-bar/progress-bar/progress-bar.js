window.onscroll = function(){   
    var winscr = document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let progress = (winscr/height)*100;
    document.getElementById("scroll-progress").style.width=progress +"%";
}
