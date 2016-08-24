function* demo () {
	for(var i=0; true; i++){
        var reset = yield i;
        if(reset) {i = -1;}
    }
}

var a = demo();
console.log(a.next().value)
console.log(a.next().value)
console.log(a.next().value)
console.log(a.next().value)
console.log(a.next(true).value)

function delay(time, callback) {
	setTimeout(function() {
		callback('Slept for ' + time + 'ms')
	}, time)
}

// delay(1000, function(msg) {
// 	console.log(msg);
// 	delay(1200, function(msg) {
// 		console.log(msg);
// 	})
// })

run(function* myDelayedMsg(resume) {
	// yield delay(1000, resume);
	console.log(yield delay(1000, resume));
	console.log(yield delay(1200, resume));
})

function run(generatorFunction) {
	var generatorItr = generatorFunction(resume);
	function resume(callbackValue) { 
		generatorItr.next(callbackValue); 
	} 
	generatorItr.next() 
}
