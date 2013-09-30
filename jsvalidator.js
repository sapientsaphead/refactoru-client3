
//Phone Number
var phoneno = prompt("Please enter your phone number with dashes. Rest assured we will not spam you.","");
if(phoneno.charAt(3) !== "-" || phoneno.charAt(7) !== "-" || phoneno.length !== 12){
	prompt("You must enter a valid phone number.");
}
else {
	alert("Thank you. Your phone belong to us.")
}

//Birth Date
var birthdate = prompt("Please enter your birth date.","MM/DD/YY");
if(birthdate.charAt(2) !== "/" || birthdate.charAt(5) !== "/"){
	prompt("You must enter a valid birth date.");
}
else {
	alert("Thank you. Your information belong to us.")
}

//Postal Code
var postalcode = prompt("Please enter your postal code.","");
if(postalcode.length === 5 || (postalcode.length === 10 && postalcode.charAt(5) === "-")) {
	alert("Thank you. Your information belong to us.")
}
else {
	prompt("You must enter a valid postal code.");
}

//State Abbreviation (added function to ensure a correct response because it's fun)
var promptstate = function () {
	var stateabb = prompt("Please enter your state code.","");
	if(stateabb.length === 2 && stateabb.toUpperCase() === stateabb){
		alert("Thank you. Your information belong to us.");
	}
	else {
		promptstate()
	}
}
promptstate() 



//Married
var married = prompt("Are you married? Please answer Yes or No.","");
if(married.toLowerCase() === "yes" || married.toLowerCase() === "no"){
	alert("Thank you. Your information belong to us.");
}
else {
	prompt("Please answer Yes or No.");
}