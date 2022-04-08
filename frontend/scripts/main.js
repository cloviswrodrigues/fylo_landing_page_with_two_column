const forms = document.querySelectorAll('.js-form')

forms.forEach(initForm)

function initForm(form) {
    let inputEmail = form.querySelector('.form__input');

    form.addEventListener('submit', (e) => {         
        e.preventDefault();    
        let emailValid = validateInput(inputEmail);

        if (!emailValid) {
            inputEmail.value = ''
        }
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
        activeSucessInputEmail(inputEmail, true);
        return false;
    }
}

function isValidEmail(email){
    let regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    return regex.exec(email) == null ? false : true;
}

function activeErrorInputEmail(inputEmail, isError) {
    console.log('inputEmail:'+inputEmail)
    spanMsg = inputEmail.parentElement.querySelector('.msg__error');
    if (isError){
        inputEmail.classList.add('input__error');
        spanMsg.classList.add('active');
    }else {
        inputEmail.classList.remove('input__error');
        spanMsg.classList.remove('active');
    }
}

function activeSucessInputEmail(inputEmail, isSucess) {
    spanMsg = inputEmail.parentElement.querySelector('.msg__success');

    console.log('spanMsg: ',spanMsg)
    if (isSucess){
        spanMsg.classList.add('active');
    } else {
        spanMsg.classList.remove('active');
    }    
}