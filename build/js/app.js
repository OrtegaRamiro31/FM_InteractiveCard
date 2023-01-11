import { verifyCardName, verifyCardNumber, monthAndYearVerify, cvcVerify } from "./helper.js";

// ****************Constantes**************** //
/* Main Container */
const mainContainer = document.querySelector('.main-container__form-section');
/* CardHolder */
const showErrorCardHolder = document.querySelector(".form__cardholder--error");
const inputCardName = document.querySelector('#cardholder');
const cardName = document.querySelector('.card__details-name');

/* CardNumber */
const showErrorCardNum = document.querySelector('.form__inputnumber--error');
const inputCardNum = document.querySelector('#cardNumber');
const cardNumber = document.querySelector('.card__number');

/* CardDates */
const showErrorDates = document.querySelector('.from__input-mmyy--error');
const inputMonth = document.querySelector('#cardMonth');
const inputYear = document.querySelector('#cardYear');
const cardMonth = document.querySelector('.card__month');
const cardYear = document.querySelector('.card__year');

/* CVC */
const showErrorCardCVC = document.querySelector('.from__input-cvc--error');
const inputCVC = document.querySelector('#cardCvc');
const cardCVC = document.querySelector('.card-back__cvc');

/* Submit */
const inputSubmitInfo = document.querySelector(".form__submit");

/* Thanks Container */
const thanks_section = document.querySelector('.thanks-section');
const inputContinue = document.querySelector('.thanks-section__button');
/* Funcion Inicial */
document.addEventListener('DOMContentLoaded', () => {
    iniciarApp();
});

function iniciarApp(){
    cardHolder();
    cardNum();
    cardDate();
    backCardCVC();
    inputSubmit();
}

function cardHolder() {
    inputCardName.addEventListener('input', (e) => {

        cardName.textContent = e.target.value;
        
    });
}

function cardNum() {

    inputCardNum.addEventListener('input', (e) => {
        let strValueNumber;
        strValueNumber = e.target.value
        // Eliminamos espacios en blanco
        .replace(/\s/g, '')
        // Ponemos espacio cada cuatro/letras numeros
        .replace(/([0-9 a-z A-Z]{4})/g, '$1 ')
        // Elimina el ultimo espaciado
        .trim();

        e.target.value = strValueNumber;

        cardNumber.textContent = strValueNumber;
    });
}

function cardDate() {

    inputMonth.addEventListener('input', (e) => {
        cardMonth.textContent = e.target.value;
    });

    inputYear.addEventListener('input', (e) => {
        
        cardYear.textContent = e.target.value;
    });
}

function backCardCVC(){
    inputCVC.addEventListener('input', (e) => {
        cardCVC.textContent = e.target.value;
    });
}

function inputSubmit() {
    
    inputSubmitInfo.addEventListener('click', (e) => {
        e.preventDefault();
        verifyInputs();
    });
}

function verifyInputs(){
    if(    
        verifyCardName(inputCardName, showErrorCardHolder),
        verifyCardNumber(inputCardNum, showErrorCardNum),
        monthAndYearVerify(inputMonth, inputYear, showErrorDates),
        cvcVerify(inputCVC, showErrorCardCVC)
        ) {
            console.log(thanks_section);
            thanks_section.style.display="flex";
            mainContainer.style.display="none";
            inputContinue.addEventListener('click', () => {
                location.reload();
            });
        } 
}
