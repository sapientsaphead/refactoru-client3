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
