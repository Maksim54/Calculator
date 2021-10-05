var vastus=document.getElementById("vastus");                              
var kogus=document.getElementById("kogus");                                
var vastus2=document.getElementById("vastus2");                            
var kogus2=document.getElementById("kogus2");                              
var pilt=document.getElementById("pilt");                                  
var age = document.getElementById("age");                                  
var height = document.getElementById("height");                            
var weight = document.getElementById("weight");                            
var male = document.getElementById("m");                                   
var female = document.getElementById("f");                                 
var form = document.getElementById("form");                                
const dollar=1.16;                                                         
const kroon=10.65;                                                         
const rub=84.20;                                                           
const frank=1.077;                                                         
//korrutab                                                                 
                                                                           
function radioChange(event){                                               
var inputValue=kogus.value;                                                
    if(event.target.id=="dollar"){                                         
        vastus.innerHTML=calculate(inputValue,dollar)+ "$";                
        pilt.src="img/dollar.png";                                         
    }                                                                      
   else if(event.target.id=="rub"){                                        
        vastus.innerHTML=calculate(inputValue,rub)+ "₽";                   
        pilt.src="img/rub.png";                                            
    }                                                                      
    else if(event.target.id=="kroon"){                                     
        vastus.innerHTML=calculate(inputValue,kroon)+ "SEK";               
        pilt.src="img/sek.png";                                            
    }                                                                      
    else if(event.target.id=="frank"){                                     
        vastus.innerHTML=calculate(inputValue,frank)+ "CHF";               
        pilt.src="img/chf.png";                                            
    }                                                                      
                                                                           
}                                                                          
function calculate(val,currency){                                          
    return(val*currency).toFixed(3);                                       
    //toFixed(3)-? 3 märki peale komat                                     
}                                                                          
function selectOptionChange(event){                                        
    var inputValue=kogus2.value;                                           
    if(event.target.value==="dollar"){                                     
        vastus2.innerHTML= calculate(inputValue,dollar)+ "$";              
        pilt.src="img/dollar.png";                                         
    }                                                                      
    else if(event.target.value==="rub"){                                   
        vastus2.innerHTML= calculate(inputValue,rub)+ "₽";                 
        pilt.src="img/rub.png";                                            
    }                                                                      
    else if(event.target.value==="kroon"){                                 
        vastus2.innerHTML= calculate(inputValue,kroon)+ "SEK";             
        pilt.src="img/sek.png";                                            
    }                                                                      
    else if(event.target.value==="frank"){                                 
        vastus2.innerHTML= calculate(inputValue,frank)+ "CHF";             
        pilt.src="img/chf.png";                                            
    }                                                                      
}                                                                          
function inputValutaText(){                                                
    var inputValue=document.getElementById("kogus3").value;                
    var inputText=document.getElementById("valuutanimi").value;            
    var vastus3=document.getElementById("vastus3");                        
    if(inputText=="dollar"){                                               
        vastus3.innerHTML=calculate(inputValue,dollar)+"$";                
                                                                           
    }                                                                      
    else if(inputText=="rub"){                                             
        vastus3.innerHTML=calculate(inputValue,rub)+"₽";                   
                                                                           
    }                                                                      
    if(inputText=="kroon") {                                               
                                                                           
        vastus3.innerHTML = calculate(inputValue, kroon) + "SEK";          
    }                                                                      
    if(inputText=="frank") {                                               
        vastus3.innerHTML = calculate(inputValue, frank) + "CHF";          
    }                                                                      
                                                                           
}                                                                          
                                                                           
                                                                           
                                                                           
                                                                           
                                                                           
                                                                           
                                                                           
                                                                           
                                                                           
                                                                           
                                                                           
                                                                           
                                                                           
                                                                           
                                                                           
                                                                           
                                                                           
                                                                           
                                                                           
                                                                           
                                                                           
                                                                           
                                                                           
                                                                           
                                                                           
                                                                           
                                                                           
                                                                           
                                                                           
                                                                           
                                                                           
                                                                           
                                                                           
                                                                           
                                                                           
                                                                           
                                                                           
                                                                           
                                                                           
function validateForm() {                                                  
    let x = document.forms["var"]["kogus"].value;                          
    if (x == "") {                                                         
        alert("Siseta kogus!");                                            
        return false;                                                      
    }                                                                      
}                                                                          
                                                                           
                                                                           
function validateForm(){                                                   
  if(age.value=='' || height.value=='' || weight.value=='' || (male.checked
    alert("All fields are required!");                                     
    document.getElementById("submit").removeEventListener("click", countBmi
  }else{                                                                   
    countBmi();                                                            
  }                                                                        
}                                                                          
document.getElementById("submit").addEventListener("click", validateForm); 
                                                                           
function countBmi(){                                                       
  var p = [age.value, height.value, weight.value];                         
  if(male.checked){                                                        
    p.push("male");                                                        
  }else if(female.checked){                                                
    p.push("female");                                                      
  }                                                                        
  form.reset();                                                            
  var bmi = Number(p[2])/(Number(p[1])/100*Number(p[1])/100);              
                                                                           
  var result = '';                                                         
  if(bmi<18.5){                                                            
    result = 'Underweight';                                                
     }else if(18.5<=bmi&&bmi<=24.9){                                       
    result = 'Healthy';                                                    
     }else if(25<=bmi&&bmi<=29.9){                                         
    result = 'Overweight';                                                 
     }else if(30<=bmi&&bmi<=34.9){                                         
    result = 'Obese';                                                      
     }else if(35<=bmi){                                                    
    result = 'Extremely obese';                                            
     }                                                                     
                                                                           
  var h1 = document.createElement("h1");                                   
  var h2 = document.createElement("h2");                                   
                                                                           
  var t = document.createTextNode(result);                                 
  var b = document.createTextNode('BMI: ');                                
  var r = document.createTextNode(parseFloat(bmi).toFixed(2));             
                                                                           
  h1.appendChild(t);                                                       
  h2.appendChild(b);                                                       
  h2.appendChild(r);                                                       
                                                                           
  document.body.appendChild(h1);                                           
  document.body.appendChild(h2);                                           
  document.getElementById("submit").removeEventListener("click", countBmi);
  document.getElementById("submit").removeEventListener("click", validateFo
}                                                                          
document.getElementById("submit").addEventListener("click", countBmi);     
