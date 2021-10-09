var answer=document.getElementById("answer");
var all=document.getElementById("all");
var pilt=document.getElementById("pilt");
var picture=document.getElementById("picture");

const minute=0.017;
const hour=0.0003;
const day=0.00001;
const week=0.000001;
const month=0.00000022998;
const year=0.000000019177;
const century=0.00000000019165;

function calculate(val,currency) {
    return (val * currency).toFixed(8);
}

function radioChange(event){
    var inputValue=all.value;
    if(event.target.id=="minute"){
        answer.innerHTML=calculate(all.value,minute) + " min";
        pilt.src="images/minute.png";
    }
    else if(event.target.id=="hour"){
        answer.innerHTML=calculate(all.value,hour) + " h";
        pilt.src="images/hour.png";
    }
    else if(event.target.id=="day"){
        answer.innerHTML=calculate(all.value,day) + " d";
        pilt.src="images/day.png";
    }
    else if(event.target.id=="week"){
        answer.innerHTML=calculate(all.value,week) + " w";
        pilt.src="images/week.png";
    }
    else if(event.target.id=="month"){
        answer.innerHTML=calculate(all.value,month) + " m";
        pilt.src="images/month.png";
    }
    else if(event.target.id=="year"){
        answer.innerHTML=calculate(all.value,year) + " year";
        pilt.src="images/year.png";
    }
    else if(event.target.id=="century"){
        answer.innerHTML=calculate(all.value,century) + " century";
        pilt.src="images/century.gif";
    }
}var answer=document.getElementById("answer");
var all=document.getElementById("all");
var pilt=document.getElementById("pilt");
var picture=document.getElementById("picture");

const minute=0.017;
const hour=0.0003;
const day=0.00001;
const week=0.000001;
const month=0.00000022998;
const year=0.000000019177;
const century=0.00000000019165;

function calculate(val,currency) {
    return (val * currency).toFixed(8);
}

function radioChange(event){
    var inputValue=all.value;
    if(event.target.id=="minute"){
        answer.innerHTML=calculate(all.value,minute) + " min";
        pilt.src="images/minute.png";
    }
    else if(event.target.id=="hour"){
        answer.innerHTML=calculate(all.value,hour) + " h";
        pilt.src="images/hour.png";
    }
    else if(event.target.id=="day"){
        answer.innerHTML=calculate(all.value,day) + " d";
        pilt.src="images/day.png";
    }
    else if(event.target.id=="week"){
        answer.innerHTML=calculate(all.value,week) + " w";
        pilt.src="images/week.png";
    }
    else if(event.target.id=="month"){
        answer.innerHTML=calculate(all.value,month) + " m";
        pilt.src="images/month.png";
    }
    else if(event.target.id=="year"){
        answer.innerHTML=calculate(all.value,year) + " year";
        pilt.src="images/year.png";
    }
    else if(event.target.id=="century"){
        answer.innerHTML=calculate(all.value,century) + " century";
        pilt.src="images/century.gif";
    }
}var answer=document.getElementById("answer");
var all=document.getElementById("all");
var pilt=document.getElementById("pilt");
var picture=document.getElementById("picture");

const minute=0.017;
const hour=0.0003;
const day=0.00001;
const week=0.000001;
const month=0.00000022998;
const year=0.000000019177;
const century=0.00000000019165;

function calculate(val,currency) {
    return (val * currency).toFixed(8);
}

function radioChange(event){
    var inputValue=all.value;
    if(event.target.id=="minute"){
        answer.innerHTML=calculate(all.value,minute) + " min";
        pilt.src="images/minute.png";
    }
    else if(event.target.id=="hour"){
        answer.innerHTML=calculate(all.value,hour) + " h";
        pilt.src="images/hour.png";
    }
    else if(event.target.id=="day"){
        answer.innerHTML=calculate(all.value,day) + " d";
        pilt.src="images/day.png";
    }
    else if(event.target.id=="week"){
        answer.innerHTML=calculate(all.value,week) + " w";
        pilt.src="images/week.png";
    }
    else if(event.target.id=="month"){
        answer.innerHTML=calculate(all.value,month) + " m";
        pilt.src="images/month.png";
    }
    else if(event.target.id=="year"){
        answer.innerHTML=calculate(all.value,year) + " year";
        pilt.src="images/year.png";
    }
    else if(event.target.id=="century"){
        answer.innerHTML=calculate(all.value,century) + " century";
        pilt.src="images/century.gif";
    }
}