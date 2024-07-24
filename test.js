

 let d3=getDayInMonth(2023,8)+26-28;


function getDayInMonth(year,month){
    return new Date(year,month,0).getDate();
}

console.log(d3);