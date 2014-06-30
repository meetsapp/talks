// Setup viewportsize for desktop
if (window.devicePixelRatio == 1) {
	document.body.style.webkitTransformOrigin = "left top";
	document.body.style.webkitTransform = "scale(0.5)";
}

// Create variables for our views
var wrapper = PSD["plan-list"];
var shadow = new View({
	x: 0, y: 0,
	width: wrapper.width, height: wrapper.height,
	style: {
		backgroundColor: "rgba(0, 0, 0, 0.75)"
	},
	superView: wrapper
});
var popUp = PSD["category-selector"];
var icon = PSD["logo-selected"];

// Setup inital state for our views
shadow.visible = false;
popUp.visible = false;
icon.visible = false;

// Show popup
wrapper.on("click", function() {

	// Animate icon
	icon.visible = true;
	icon.opacity = 0;
	icon.animate({
		properties: {
			opacity: 1
		},
		curve: "linear",
		time: "200"
	});

	// Animate shadow
	shadow.visible = true;
	shadow.opacity = 0;
	shadow.animate({
		properties: {
			opacity: 1
		},
		curve: "ease-out",
		time: "100"
	});

	// Animate popup
	popUp.visible = true;
	popUp.opacity = 0;
	popUp.scale = 0.8;
	popUp.y = 460;
	utils.delay(150, function() {
		popUp.animate({
			origin: "50% 100%", //css transform-origin
			properties: {
				opacity: 1,
				scale: 1,
				y: 445 //Default position
			},
			curve: "spring(1000, 20, 500)"
			// curve: "bezier-curve(0.230, 0.990, 0.395, 1.470)",
			// time: 200
		});
	});
});
