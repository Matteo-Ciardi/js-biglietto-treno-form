// ELEMENTI DI INPUT
let ageField = document.getElementById("age");
let kmField = document.getElementById("kilometers");
const button = document.getElementById("my_Button");
const form = document.getElementById("my_Form");

form.addEventListener("submit", calculateTicketCost);

// ELEMENTI DI OUTPUT
const userAge = document.getElementById("user_Age");
const userKm = document.getElementById("user_Km");
const ticketPrice = document.getElementById("user_TicketCost");

// FUNZIONE PER CALCOLARE IL COSTO DEL BIGLIETTO
function calculateTicketCost(event) {
    event.preventDefault();

    const ageValue = Number(ageField.value.trim());
    const kmValue = Number(kmField.value.trim());
    const normalTicketPrice = (kmValue * 0.21);
    let finalPrice;

    if (ageValue < 18) {
        finalPrice = normalTicketPrice * 0.8;

    } else if (ageValue > 65) {
        finalPrice = normalTicketPrice * 0.6;

    } else {
        finalPrice = normalTicketPrice;

    }

    finalPrice = finalPrice.toFixed(2);

    userAge.innerText = ageValue;
    userKm.innerText = kmValue;
    ticketPrice.innerText = finalPrice;
}

