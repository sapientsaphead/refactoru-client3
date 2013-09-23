var married = prompt("Are you married? Please answer Yes or No.","");
if(married.toLowerCase() === "yes" || married.toLowerCase() === "no"){
	alert("Thank you. Your information belong to us.");
}
else {
	prompt("Please answer Yes or No.");
}

