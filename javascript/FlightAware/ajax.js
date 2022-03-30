//FlightAware Application
$.ajax({
    contentType : 'application/json',
    type : 'POST',
	url: 'https://flightaware.com/about/careers/position/A3.B17/apply',
	headers: { 'Authorization': 'Bearer U29mdHdhcmUgRW5naW5lZXIgLSBXZWI=' },
	data: JSON.stringify({"name":"Benjamin Wright", "email":"mail@wrightben.com"})
}).done(function ( data ) {
	console.log(data)
})
