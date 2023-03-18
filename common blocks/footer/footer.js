const footerDate = document.getElementsByClassName("footer__date")[0];
let now = new Date();
footerDate.innerText=now.getFullYear();