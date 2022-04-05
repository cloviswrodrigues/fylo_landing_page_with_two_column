const form = document.getElementsByClassName('js-form')
const inputEmail = document.getElementById('js-email');
const spanEmailMsgError = document.getElementById('js-email-msg-error');
const spanEmailMsgSucess = document.getElementById('js-email-msg-sucess');

form.addEventListener('submit', (e) => {         
    e.preventDefault();   
    let validate = validateInput();
    if (!validate) {
        activeSucessInputEmail(true);
        inputEmail.value = ''
    }
})

form.addEventListener('focusin', (e) => {
    activeErrorInputEmail(false);
    activeSucessInputEmail(false);
});

function validateInput() {
   if (!isValidEmail(inputEmail.value)){
        activeErrorInputEmail(true);
        return true;
    }else{
        activeErrorInputEmail(false);
        return false;
    }
}

function isValidEmail(email){
    let regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    return regex.exec(email) == null ? false : true;
}

function activeErrorInputEmail(active) {
    if (active){
        inputEmail.classList.add('active-error-input');
        spanEmailMsgError.classList.add('active');
    }else {
        inputEmail.classList.remove('active-error-input');
        spanEmailMsgError.classList.remove('active');
    }
}

function activeSucessInputEmail(active) {
    if (active){
        inputEmail.classList.add('active-sucess-input');
        spanEmailMsgSucess.classList.add('active');
    } else {
        inputEmail.classList.remove('active-sucess-input');
        spanEmailMsgSucess.classList.remove('active');
    }
}