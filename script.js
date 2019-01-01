'use strict'
const total = 1000;
const dealine = new Date(2019,11,1);
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
    document.getElementsByClassName("amountLeft")[0].innerHTML= amountLeft;
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
    document.getElementsByClassName("giveNow")[0].setAttribute('disabled','true');     
    document.getElementsByClassName("arrow_box")[0].innerHTML= "Thanks for your donation !";
    document.getElementsByClassName('arrow_box')[0].setAttribute('style',`color: green`);
}

const udpateProgress=()=>{
    progress = (donation * 100) / total;
    document.getElementsByClassName('progressbar')[0].setAttribute('style',`width: ${progress}%`);
}

const share = ()=>{
    let facebookWindow = window.open('https://www.facebook.com/sharer/sharer.php?u=' + document.URL, 'facebook-popup', 'height=350,width=600');
    if(facebookWindow.focus) { facebookWindow.focus(); }
      return false;
  }

const save = () => {
    alert('Saved !!')
}
    
