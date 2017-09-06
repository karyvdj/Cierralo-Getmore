var number = 20;
var arrayNum = [];

function numbersPrimos(number){
	for(var i = 1;i < number; i++){
		if(number % i == 0){
			arrayNum.push(i);
		}
	 	console.log(arrayNum);
	}
}
numbersPrimos(number);
