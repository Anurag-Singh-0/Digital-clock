let dateElement = document.querySelector(".date");
let timeElement = document.querySelector(".time");


const monthsNames = [
    "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
]

function updateDateTime() {
  let myDate = new Date()

  let dateData = {
    day: myDate.getDate(),
    monthName: monthsNames[myDate.getMonth()], 
    year: myDate.getFullYear(),
    hour: myDate.getHours(),
    minute: myDate.getMinutes(),
    second: myDate.getSeconds(),
  };

  dateElement.innerHTML = `${dateData.day} ${dateData.monthName} ${dateData.year}`;

  timeElement.innerHTML = `${dateData.hour < 10 ? '0' + dateData.hour : dateData.hour} : ${dateData.minute < 10 ? '0' + dateData.minute : dateData.minute} : ${dateData.second < 10 ? '0' + dateData.second : dateData.second}`;
}

setInterval(updateDateTime, 1000);

updateDateTime();
