var express = require('express');
var http = require('http');

var app = express();

app.set('port', process.env.PORT || 8008);

let arr = [120, 22, 5, 100, 45, 80, 23, 1, 70];
console.log(`Initial Array:\n [ ${arr} ]`);
console.log('--------------------------------------');

//Iterate to array until it reaches to index 0;
//i = 9; length of array 
for(let i = arr.length; i > 0; i--){
	console.log(arr);
	//i = 9
	for(let l = 1; l < i; l++){
		//compare the first index on the second index, if first index is higher
		//then swap and repeat the process until the value was compared to all arr index
		//keep swapping until that index is the highest
		// l = 1, if arr[0] > arr[1]
		if(arr[l-1] > arr[l]){
			//swapVal is a temporary variable
			let swapVal = arr[l-1]; // swapVal = arr[0]
			arr[l-1] = arr[l]; //arr[0] = arr[1]
			arr[l] = swapVal; // arr[1] = arr[0]
		}
	}	
}

http.createServer(app).listen(app.get('port'), () => {
	console.log('Server Listening to Port ' + app.get('port'));
});
