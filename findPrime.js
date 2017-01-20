
//we are going to assume num is a prime. then we will run through all the number starting with 2 to the given num. there is no number that is divisable with num then primeNum will stay true else it is not a prime number 
var primeNum;

function prime(num){
	primeNum=true;
	for(var i=2; i<num; i++){
		if(num%i==0){
			primeNum=false;
		}
	}
	console.log(primeNum);
}