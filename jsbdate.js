var birthdate = prompt("Please enter your birth date.","MM/DD/YY");
if(birthdate.charAt(2) != "/" || birthdate.charAt(5) != "/"){
	prompt("You must enter a valid birth date.");
}
else {
	alert("Thank you. Your information belong to us.")
}

