'use strict'
const total = 1000;
const dealine = new Date(2019,0,1);
const currentDay = new Date() ;
let donation = 0;
let donors = 20;
let amountLeft = total - donation;
let daysLeft;

window.onload = () => {
    daysDiff(dealine,currentDay);
    updateCard();

}

const updateCard= () => {
document.getElementsByClassName("donors")[0].innerHTML= donors;
document.getElementsByClassName("days")[0].innerHTML= daysLeft;
}

const daysDiff = (date1,date2) => {
   let date1_ms =  date1.getTime();
   let date2_ms =  date2.getTime();
   let one_day_ms = 1000*60*60*24; // one day in ms

   let diff =  date1_ms - date2_ms;
   daysLeft = Math.round(diff/one_day_ms);
}

const donate= () => {
    donation = donation + 50;
    amountLeft = total - donation;
    updateCard();
}