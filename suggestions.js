
//The list will be displayed as a bulleted unordered list

let suggestions=[];

function go(){
	// The join() method creates / returns a new string 
	// It concatonates all of the elements of the array
	// The separator string is the null string

	let finalString  = suggestions.join("");
	document.getElementById("main").innerHTML=finalString;
}

function addToEnd(){
	
	suggestions.push(prompt("Enter item") + "<br>");
	go();
}

function removeFromEnd(){
	suggestions.pop();
	go();
}
