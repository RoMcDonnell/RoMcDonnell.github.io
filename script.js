
function submit(){
	
	var name = document.getElementById("name").value + " thank you for your details.";
	var number = "We will be in touch via " + document.getElementById("number").value + " shortly.";
	var email = " We will also drop you an email at " + document.getElementById("email").value + " answering all your queries in full. We thank you for your interest in The Blackbird and hope to welcome you to our humble abode!";
	var query = document.getElementById("query").value
	window.alert(name + " " + number + email);
	
	

}



