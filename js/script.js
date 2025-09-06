// ELEMENTI DI INPUT
const form = document.getElementById("my_Form");
let dataField = document.getElementById("data");
let kmField = document.getElementById("kilometers");
let ageField = document.getElementById("age");
const calcButton = document.getElementById("calculate_Button");
const undoButton = document.getElementById("undo_Button");

let carriageNum = Math.floor((Math.random() * 6) + 1);
let trainNum = Math.floor((Math.random() * 50000) + 1999);

form.addEventListener("submit", calculateTicketCost);

// ELEMENTI DI OUTPUT
const userData = document.getElementById("user_Data");
const ticketPrice = document.getElementById("user_TicketCost");
const ticketType = document.getElementById("ticket_Type");
const carriageNumber = document.getElementById("carriage_Number");
const trainNumber = document.getElementById("train_Number");

// FUNZIONE PER CALCOLARE IL COSTO DEL BIGLIETTO
function calculateTicketCost(event) {
    event.preventDefault();

    const ageValue = Number(ageField.value.trim());
    const kmValue = Number(kmField.value.trim());
    const normalTicketPrice = (kmValue * 0.21);
    let finalPrice;
    let discountType = "";

    if (ageValue < 18) {
        finalPrice = normalTicketPrice * 0.8;
        discountType = "Ridotto bambini";

    } else if (ageValue > 65) {
        finalPrice = normalTicketPrice * 0.6;
        discountType = "Ridotto anziani";

    } else {
        finalPrice = normalTicketPrice;
        discountType = "Intero";

    }

    finalPrice = finalPrice.toFixed(2);

    // STAMPA DEI VALORI CALCOLATI DALLA FUNZIONE
    userData.innerText = dataField.value;
    ticketType.innerText = discountType;
    ticketPrice.innerText = finalPrice;

    // STAMPA GENERATORI RANDOM CARROZZA E NUMERO TRENO 
    carriageNumber.innerText = carriageNum;
    trainNumber.innerText = trainNum;
}

undoButton.addEventListener("click", () => form.reset());



