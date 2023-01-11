function verifyOnlyNumbers(numero) {
    const regex = /^[0-9]*$/;
    return regex.test(numero);
} 

function verifyCardName(inputCardName, showErrorCardHolder){
    const regex = /^[a-z A-Z]*$/;
    
    // If input is empty
    if(inputCardName.value.length === 0) {
        showErrorCardHolder.textContent = 'Can\'t be blank';
        inputCardName.classList.add('error-input');
    }
    // All less letters
    else if(!regex.test(inputCardName.value)) {
        showErrorCardHolder.textContent = "Wrong format, letters only";
        inputCardName.classList.add('error-input');
    }

    else {
        showErrorCardHolder.textContent = "";
        inputCardName.classList.remove('error-input');
        return true;
    }
    return false;
}

function verifyCardNumber(inputCardNum, showErrorCardNum) {
    // If input is empty
    if(inputCardNum.value.length === 0) { 
        showErrorCardNum.textContent = 'Can\'t be blank';
        inputCardNum.classList.add('error-input');
    }

    // If input contains letters or others characters
    else if(!verifyOnlyNumbers(inputCardNum.value.split(" ").join(""))){
        showErrorCardNum.textContent = 'Wrong format, numbers only';
        inputCardNum.classList.add('error-input');
    }

    else if(inputCardNum.value.split(" ").join("").length < 16) {
        showErrorCardNum.textContent = 'Can\'t be less than 16 numbers';
        inputCardNum.classList.add('error-input');
    }

    else {  
        showErrorCardNum.textContent = '';
        inputCardNum.classList.remove('error-input');
        return true;
    }
    return false;
}

function monthAndYearVerify(inputMonth, inputYear, showErrorDates){
    let currentYear = parseInt(new Date().getFullYear().toString().slice(2,4));
    if(inputMonth.value.length === 0 || inputYear.value.length === 0) {
        showErrorDates.textContent = 'Can\'t be blank';
        inputMonth.classList.add('error-input');
        showErrorDates.textContent = 'Can\'t be blank';
        inputYear.classList.add('error-input');
    }
    else if(inputMonth.value.length === 0) {
        showErrorDates.textContent = 'Can\'t be blank';
        inputMonth.classList.add('error-input');
    }
    else if( inputYear.value.length === 0){
        showErrorDates.textContent = 'Can\'t be blank';
        inputYear.classList.add('error-input');

    }
    else if(inputMonth.value > 12 || !verifyOnlyNumbers(inputMonth.value) || inputMonth.value.length < 2 || !verifyOnlyNumbers(inputYear.value) || inputYear.value.length < 2 || parseInt(inputYear.value) < currentYear) {
        inputMonth.classList.add('error-input');
        inputYear.classList.add('error-input');
        showErrorDates.textContent = "Invalid Month Or Year";
    }
    else {
        inputMonth.classList.remove('error-input');
        inputYear.classList.remove('error-input');
        showErrorDates.textContent = "";
        return true;
    }
    return false;
}

function cvcVerify(inputCVC, showErrorCardCVC){
    if(inputCVC.value.length === 0) {
        showErrorCardCVC.textContent = 'Can\'t be blank';
        inputCVC.classList.add('error-input');
    } 
    else if(inputCVC.value.length < 3) {
        showErrorCardCVC.textContent = 'Can\'t be less than 3 numbers';
        inputCVC.classList.add('error-input');
    } 
    else if(!verifyOnlyNumbers(inputCVC.value)){
        showErrorCardCVC.textContent = 'Invalid CVC';
        inputCVC.classList.add('error-input');
    }
    else {
        inputCVC.classList.remove('error-input');
        showErrorCardCVC.textContent = '';
        return true;
    }
    return false;
}

export {verifyOnlyNumbers, verifyCardName, verifyCardNumber, monthAndYearVerify, cvcVerify};