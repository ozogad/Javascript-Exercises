/*
Exercise 1
Given an array of numbers, sort ascending odd numbers but leave even 
numbers in their original place in the array.  
Zero does not need to move. If the array is empty, return an empty array.

Example

[5, 3, 2, 8, 1, 4] should return [1, 3, 2, 8, 5, 4]
*/

var odd_array = [];

function sort_odd(array) {
	// Check for empty array
	if((array === undefined || array.length == 0)){
    	return array;
    }
	// Create an array of all the odd numbers from original array
	odd_array = array.filter(check_odd);
    
    // Sort the odd numbers
    odd_array.sort(function(a, b){return a - b});
    
    // Return a reordered array 
    return array.map(reorder_array);
}

function check_odd(num){
	// Check if number is odd
	if(num % 2 == 1){
    	return num
    }
}

function reorder_array(num) {

	// Check if number is odd
	if (num % 2 == 1){
    	
    	// Remove and return first number from odd_array
    	return odd_array.shift();
        
    // Return number if not odd
    }else{
    	return num;
    }
}
