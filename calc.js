const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("What would you like to calculate?", function(input){
	tokens = input.split(' ');
	
	mathSymbol = tokens[0];
	num1 = Number(tokens[1]);
	num2 = Number(tokens[2]);
	
	switch (mathSymbol) {
		case "+":
			console.log(num1+num2);
			break;
		case "-":
			console.log(num1-num2);
			break;
		case "*":
			console.log(num1*num2);
			break;
		case "/":
			console.log(num1/num2);
			break;
		case "sqrt":
			let answer = Math.sqrt(num1)
			console.log(answer);
			break;
		case "square":
			console.log(Math.pow(num1,2));
			break;
		case "cube":
			console.log(Math.pow(num1, 3));
			break;
		case "pow":
			console.log(Math.pow(num1, num2));
			break;
		case "modu":
			console.log(num1%num2);
			break;
		default:
			break;
		}
	
	

	// This line closes the connection to the command line interface.
	reader.close()

});
