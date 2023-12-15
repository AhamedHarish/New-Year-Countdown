const days=document.getElementById("days");
const hours=document.getElementById("hours");
const minutes=document.getElementById("minutes");
const seconds=document.getElementById("seconds");

const currentDate = new Date().getFullYear();
const newYear = new Date(`January 1 ${currentDate + 1} 00:00:00`)

function newYearCountdown(){
  const currentTime = new Date();
  const difference = newYear - currentTime;
  const s = Math.floor((difference/1000)%60);
  const m = Math.floor((difference/1000/60)%60);
  const h = Math.floor((difference/1000/60/60)%24);
  const d = Math.floor(difference/1000/60/60/24);

  days.innerHTML=d;
  hours.innerHTML=h<10? '0'+ h:h;
  minutes.innerHTML=m<10? '0'+ m:m;;
  seconds.innerHTML=s<10? '0'+ s:s;
}

setInterval(newYearCountdown,1000);
