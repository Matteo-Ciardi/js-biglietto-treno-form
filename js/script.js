const userData = document.querySelector("input-data");
const userKm = document.querySelector("input-km");
const userAge = document.querySelector("select-age");
const priceForKm = 0.21;

generate.addEventListener("submit", calculateCostTicket);

// FUNZIONE PER CALCOLARE IL COSTO
