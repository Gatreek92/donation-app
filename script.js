'use strict'
const total = 1000;
const dealine = new Date(2019,0,1);
const currentDay = new Date() ;
let donation = 0;
let donors = 20;
let amountLeft = total - donation;
let daysLeft;
let progress = (donation * 100) / total

window.onload = () => {
document.getElementsByClassName('progressbar')[0].style.width = progress;
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
    udpateProgress();
    updateCard();
    if (donation === total)
    stopDonation()
}

const stopDonation = () => {
    let inputs =   document.getElementsByTagName('input');
    for (let index = 0; index < inputs.length; index++) {
    inputs[index].setAttribute('disabled','true')     
    }
}

const udpateProgress=()=>{
    progress = (donation * 100) / total;
    document.getElementsByClassName('progressbar')[0].setAttribute('style',`width: ${progress}%`);
}