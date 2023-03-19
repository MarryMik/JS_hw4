const form = document.getElementsByClassName("form__inputs-wrap")[0];
const inputName = document.getElementsByClassName("form__name")[0];
const inputSurname = document.getElementsByClassName("form__surname")[0];
const inputEmail = document.getElementsByClassName("form__email")[0];
const buttonForm = document.getElementsByClassName("form__button")[0];
const errorText = document.getElementsByClassName("form__error-message")[0];
const congrad_text = document.getElementsByClassName("congratulation__text")[0];

const reText =/^[A-Z][a-z]+$/;
const reEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
function testText(text){
  if(!reText.exec(text.value)){
        if(Array.from(text.classList).includes("form__name")){
            errorText.innerText="\u26A0 Error! The entered name is incorrect!/n";
        }
        if(Array.from(text.classList).includes("form__surname")){
            errorText.innerText="\u26A0 Error! The entered surname is incorrect!/n";
        }
        text.classList.add("form__error");
        errorText.style.display="block";
        return false;
  }else{
    errorText.style.display="none";
    if(Array.from(text.classList).includes("form__error")){
        text.classList.remove("form__error");
    }
    return true;
  }   
}
function testEmail(email){
    if(!reEmail.exec(email.value)){
        errorText.innerText='\u26A0 Error! The entered email is incorrect!';
        email.classList.add("form__error");
        errorText.style.display="block";
        return false;
    }else{
        errorText.style.display="none";
        if(Array.from(email.classList).includes("form__error")){
            email.classList.remove("form__error");
        }
        return true;
    }
}
form.addEventListener("submit", (event) => {
    event.preventDefault();
    if(testText(inputName)){
        if(testText(inputSurname)){
            if(testEmail(inputEmail)){
                localStorage.name=inputName.value;
                localStorage.surname=inputSurname.value;
                localStorage.email=inputEmail.value;
                inputName.value="";
                inputSurname.value="";
                inputEmail.value="";
                if(localStorage.name=="Mariia"){
                    congrad_text.innerText=`Congradulations!\n Only today ${now.getDate()}/${now.getMonth()+1}/${now.getFullYear()} for users with this name 120% discount when ordering!`;
                    animationCongrad(5000);
                }
            }
        }
    }   
    
  });




