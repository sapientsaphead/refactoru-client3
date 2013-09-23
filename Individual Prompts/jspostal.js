var postalcode = prompt("Please enter your postal code.","");
if(postalcode.length === 5 || (postalcode.length === 10 && postalcode.charAt(5) === "-")) {
	alert("Thank you. Your information belong to us.")
}
else {
	prompt("You must enter a valid postal code.");
	}
