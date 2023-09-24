let email = document.querySelector('.container .email-box input');
let incorrectIcon = document.querySelector('.container .incorrect-icon');
let correctIcon = document.querySelector('.container .correct-icon');

let msg = document.querySelector('.container h6');

var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

let checkEmail =()=>{
  if(email.value != ''){
     msg.style.display = 'block';    
  if(email.value.match(validRegex)){
    incorrectIcon.style.visibility = 'hidden';
    correctIcon.style.visibility = 'visible';
    msg.style.color = '#4caf50';  
    msg.innerHTML = 'your email address is valid';
  }else{
    incorrectIcon.style.visibility = 'visible';
    correctIcon.style.visibility = 'hidden';
    msg.style.color = '#f44336';
    msg.innerHTML = 'please enter valid email address'
  }  
   }else{
     msg.style.display = 'none';    
     incorrectIcon.style.visibility = 'hidden';
     correctIcon.style.visibility = 'hidden';      
   }
}

email.addEventListener('input',checkEmail);
