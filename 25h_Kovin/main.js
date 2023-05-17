var menuButton = document.querySelector('.message_button');
var menu = document.querySelector('.message_form');
menuButton.addEventListener('click', function () {
	menuButton.classList.toggle('message_button-active');
	menu.classList.toggle('message_form-active');
})

var menuButton2 = document.querySelector('.menu_button');
var menu2 = document.querySelector('.nav_menu');
menuButton2.addEventListener('click', function () {
	menuButton2.classList.toggle('menu_button-active');
	menu2.classList.toggle('nav_menu-active');
})




let form = document.querySelector('.message_form'),
forminputs = document.querySelectorAll('.textplace'),
inputname = document.querySelector('.mfullname'),
inputmail = document.querySelector('.memail'),
inputmsg = document.querySelector('.mmessage');



function validateEmail(email) {
let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
return re.test(String(email).toLowerCase());
}


form.onsubmit = function(){

let emailVal = inputmail.value,
emptyinputs = Array.from(forminputs).filter(input => input.value === "");

forminputs.forEach(function(input){

if (input.value === "") {
input.classList.add("error");
}else{
input.classList.remove("error");
}
})

if (emptyinputs.length !== 0){
return false;
}

if(!validateEmail(emailVal)){
inputmail.classList.add("error");
return false;
}else{
inputmail.classList.remove("error");
}
}