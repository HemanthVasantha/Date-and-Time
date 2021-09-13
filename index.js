function showTime()
{
    let date=new Date();
    let day=date.getDay();
    let month=date.getMonth();
    let year=date.getFullYear();
    let hour=date.getHours();
    let min=date.getMinutes();
    let sec=date.getSeconds();
    switch(day){
        case 0:
            day="Sunday";
            break;
        case 1:
            day="Monday";  
            break;
        case 2:
            day="Tuesday";
            break;
        case 3:
            day="Wednesday";
            break;
        case 4:
            day="Thursday";
            break;
        case 5:
            day="Friday";
            break;
        case 6:
            day="Saturday";
            break;
    }
    
    let curtime=hour + ":" +min + ":"+sec ;
    let curday=day +":"+month +":" +year;
    
    document.getElementById("clock").innerHTML=curday;
    document.getElementById("cl").innerHTML=curtime;
      
}
showTime();
setInterval(showTime,1000)