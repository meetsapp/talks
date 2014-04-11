document.addEventListener("DOMContentLoaded", function() {

	var xray = document.getElementById("xray");
	var example = document.getElementById("example");

	xray.addEventListener("click", function(e){
		example.classList.toggle("xray");

		e.preventDefault();
	});


});