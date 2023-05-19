function clk()
{
    var date=new Date()
    var hh=date.getHours()
    mm=date.getMinutes()
    ss=date.getSeconds()
    dd=date.getDate()
    mo=date.getMonth()
    yy=date.getFullYear()
    dy=date.getDay()
    am_pm="AM"
    if(hh>=12)
    {
        am_pm="PM"
        if(hh>=13)
        {
            hh-=12
        }
    }
    if(hh==0)
    {
        hh=12;
    }
    if(hh<10)
    {
        hh='0'+hh
    }
    if(mm<10)
    {
        mm='0'+mm
    }
    if(ss<10)
    {
        ss='0'+ss
    }

    var fulltime=`${hh}:${mm} ${am_pm}`
    document.getElementById("time").innerHTML=fulltime
    document.getElementById("sec").innerHTML=ss
    setTimeout(clk,1000)
    if(mo==0)
    {
        mo="jan"
    }
    else if(mo==1)
    {
        mo="feb"
    }
    else if(mo==2)
    { 
         mo="mar"
    } 
    else if(mo==3)
    { 
         mo="apr"
    } 
    else if(mo==4)
    { 
         mo="may"
    } 
    else if(mo==5)
    { 
         mo="jun"
    } 
    else if(mo==6)
    {
        mo="jul"
    }
    else if(mo==7)
    {
        mo="aug"
    }
    else if(mo==8)
    {
        mo="sep"
    }
    else if(mo==9)
    {
        mo="oct"
    }
    else if(mo==10)
    {
        mo="nov"
    }
    else if(mo==11)
    {
        mo="dec"
    }
    var fullDate=`${dd}/${mo}/${yy}`
    document.getElementById("date").innerHTML=fullDate
    var bdy=document.getElementById("bdy")
    switch(dy)
    {
        case 0:dy="Sunday"
        {
            bdy.style.backgroundImage="url(./0.jpg)"
            break;
        }
        case 1:dy="Monday"
        {
            bdy.style.backgroundImage="url(./1.jpg)"
            break;
        }
        case 2:dy="Tuesday"
        {
            bdy.style.backgroundImage="url(./2.jpg)"
            break;
        }
        case 3:dy="Wednesday"
        {
            bdy.style.backgroundImage="url(./3.jpg)"
            break;
        }
        case 4:dy="Thrusday"
        {
            bdy.style.backgroundImage="url(./4.jpg)"
            break;
        }
        case 5:dy="Friday"
        {
            bdy.style.backgroundImage="url(./5.jpg)"
            break;
        }
        case 6:dy="Saturday"
        {
            bdy.style.backgroundImage="url(./6.jpg)"
            break;
        }
    }
    document.getElementById("day").innerHTML=dy

    if(hh>=5 && hh<12 && am_pm=='AM'){
        document.getElementById("status").innerHTML="Good Morning"
    }
    else if(hh==12 || hh>=1 && hh<4 && am_pm=='PM')
    {
        document.getElementById("status").innerHTML="Good Afternoon"
    }
    else if(hh>=4 && hh<10 && am_pm=='PM')
    {
        document.getElementById("status").innerHTML="Good Evening"
    }
    else{
        document.getElementById("status").innerHTML="Good Night"
    }
    function greet()
    {
        document.getElementById("greeting").style.width="0vw"
        document.getElementById("greeting").style.opacity="0%"
        document.getElementById("greeting").style.border="none"
        
    }
    setTimeout(greet,5000)
}
function setalarm(){
    document.getElementById("setalarm").style.display="flex"
}
function close2(){
    document.getElementById("setalarm").style.display="none"
}
var audiofile=new Audio()
audiofile.src="./Jarvis Alarm.mp3"
function fixalarm()
{
    var userhh=document.getElementById("alhh").value
    var usermm=document.getElementById("almm").value
    var userampm=document.getElementById("alampm").value
    var date=new Date()
    var hh=date.getHours()
    var mm=date.getMinutes()
    var am_pm="AM"
    if(hh>=12)
    {
        am_pm="PM"
        if(hh>=13)
        {
            hh-=12
        }
    }
    if(hh==0)
    {
        hh=12;
    }
    if(hh<10)
    {
        hh='0'+hh
    }
    if(mm<10)
    {
        mm='0'+mm
    }
    console.log(userhh,usermm,userampm)

// audiofile.play();
if(userhh==hh && usermm==mm && userampm==am_pm){
    audiofile.play();
}
else{
    audiofile.pause();
}
setTimeout(fixalarm,1000)
// document.getElementById("setalarm").style.display="none"
}
