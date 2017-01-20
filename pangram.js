// #Pangram Checker


// ## Instructions
// A pangram is a sentence that contains all the letters of the English alphabet at least once. For example: `The quick brown fox jumps over the lazy dog.`

// Write a function that takes a string and determines whether the string is a pangram, **without** typing out the full alphabet anywhere in your code.


// * Bonus
//   * Handle punctuation in the sentence.


// take the string and change all the char too lower case.
//split it into an array and sort it
//check each index in the array with its char code starting with 97 cause that is a on the char code
//if array index equals 97 we will add 1 to 97 to find the next letter until it reaches 123. 



//Yes I am remembering to comment before coding. we have a string and it is lowerecased,split and sorted. 
var pangram = "The quick brown fox jumps over the dog."
pangram = pangram.toLowerCase();
pangram = pangram.split("");
pangram = pangram.sort();

//tracker is to start with the charcode of the letter "a"
var tracker = 97;

//it will for loop through the pangram sample that has been lowered case, split and sorted so its in abc order. if it equal to tracker it will add one to the tracker so we would check off every letter until it hit 123 which is 1 higher then the letter z. 
for(var i = 0; i<pangram.length; i++){
	if(pangram[i].charCodeAt(0)===tracker){
		tracker++;
	}
}

// if tracker is above z then it is true  cause it went through ever letter in the alphabit
if(tracker===123){
	console.log("true");
} else {
	console.log("false");
}

