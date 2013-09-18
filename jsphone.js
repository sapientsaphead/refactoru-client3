
//Phone Number
var phoneno = prompt("Please enter your phone number with dashes. Rest assured we will not spam you.","");
if(phoneno.charAt(3) != "-" || phoneno.charAt(7) != "-"){
	prompt("You must enter a valid phone number.");
}
else {
	alert("Thank you. Your phone belong to us.")
}

