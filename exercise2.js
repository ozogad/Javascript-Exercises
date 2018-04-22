/*
Exercise 2

Given a word, return the middle character or characters of the word. 
If the word is odd in length, return a string of the middle character.  
If the word is even, return a string of the middle two characters.  
If the string is empty, return an empty string.

Example

find_middle("middle") == "dd";
*/

function find_middle(text) {

	// Length of word
    var length = text.length;
	
	// Returned string
	var result = "";
	
	// Odd length word
	if(length % 2 == 1){
		result = text.slice((length / 2), ((length / 2) + 1));
		return result;
		
	// Even length word
	}else if(length % 2 == 0){
		result = text.slice(((length / 2) - 1), ((length / 2) + 1));
		return result;
		
	// Text is empty
	}else {
		return result;
	}
}
