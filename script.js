'use strict'
window.onload = () => {
    const total = 1000;
const dealine = new Date(2019,0,1);
const currentDay = new Date() ;
    let donation = 0;
    let donors = 0;
let amountLeft = total - donation;
let daysLeft;

window.onload = () => {
    daysDiff(dealine,currentDay);
    updateCard();

}

const daysDiff = (date1,date2) => {
   let date1_ms =  date1.getTime();
   let date2_ms =  date2.getTime();
   let one_day_ms = 1000*60*60*24; // one day in ms

   let diff =  date1_ms - date2_ms;
   daysLeft = Math.round(diff/one_day_ms);
}