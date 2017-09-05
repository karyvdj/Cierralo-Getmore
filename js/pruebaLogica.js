var number = 20;
var arrayNum = [];

function numbers(number){
	for(var i = 1,i < number, i++){
		if(number % i === 0){
		 return arrayNum.push(i);
		}
		console.log(arrayNum);
	}
}
numbers(number);
