const forms = document.querySelectorAll('.js-form')

forms.forEach(initForm)

function initForm(form) {
    let inputEmail = form.querySelector('.form__input');

    form.addEventListener('submit', (e) => {         
        e.preventDefault();    
        let emailValid = validateInput(inputEmail);

    })

    form.addEventListener('focusin', (e) => {
        activeErrorInputEmail(inputEmail, false);
        activeSucessInputEmail(inputEmail, false);
    });
}

function validateInput(inputEmail) {
   if (!isValidEmail(inputEmail.value)){
        activeErrorInputEmail(inputEmail, true);
        return true;
    }else{
        activeErrorInputEmail(inputEmail, false);
        return false;
    }
}

function isValidEmail(email){
    let regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    return regex.exec(email) == null ? false : true;
}

function activeErrorInputEmail(inputEmail, isError) {
    console.log('inputEmail:'+inputEmail)
    spanMsg = inputEmail.nextElementSibling;
    if (isError){
        inputEmail.classList.add('input__error');
        spanMsg.classList.add('msg__error');
    }else {
        inputEmail.classList.remove('input__error');
        spanMsg.classList.remove('msg__error');
    }
}

function activeSucessInputEmail(inputEmail, isSucess) {
    spanMsg = inputEmail.nextElementSibling;
    if (isSucess){
        inputEmail.classList.add('input__sucess');
        spanMsg.classList.add('msg__sucess');
    } else {
        inputEmail.classList.remove('input__sucess');
        spanMsg.classList.remove('msg__sucess');
    }
}