// Setup viewportsize
if (window.devicePixelRatio == 1) {
	document.body.style.webkitTransformOrigin = "left top";
	document.body.style.webkitTransform = "scale(0.5)";
}

// This is suppossed to work with View.siblingViews but is not working :(
// Utils obj previously defined by Framer: http://www.framerjs.com/documentation/index.html#utilities
// Child view generator mView.childView["view-name"];
utils.generateChildViews = function(parentView) {
	parentView.childView = {};
	 for (var i in parentView._subViews) {
		parentView.childView[parentView._subViews[i].name] = parentView._subViews[i];
	 }
}

// Generate Views object to store all used views
var Views = {};

// // Generate splash view
Views.splash = new ImageView({
	x: 0, y: 0,
	width: 640, height: 1136,
	image: "images/brand/splash.png"
})

// Generate needed child views
Views.homeView = PSD["home"];
utils.generateChildViews(Views.homeView);

Views.createView = PSD["create"];
utils.generateChildViews(Views.createView);

// Setup initial state
Views.homeView.visible = false;
Views.createView.visible = false;
Views.splash.bringToFront();

// Triggered by preload.js
var InitializeApp = function() {
	Views.homeView.visible = true;
}

// Show modal view function
var showModalView = function(fromView, toView, setUp) {

	if (typeof setUp == "function") {
		setUp();
	}

	// Shadow layer to cover fromView
	var shadowView = new View({
		x: 0, y: 0,
		width: Views.homePlans.width, height: Views.homePlans.height,
		style: {
			backgroundColor: "rgba(0, 0, 0, 0.75)"
		},
		visible: true,
		opacity: 0,
		superView: fromView
	});
	shadowView.bringToFront();

	// Hide fromView
	shadowView.animate({
		properties: {
			opacity: 1
		},
		curve: "ease-out",
		time: 150
	});

	fromView.animate({
		origin: "50% 0%",
		properties: {
			scale: 0.9,
			y: -100
		},
		curve: "ease-out",
		time: 100
	});

	// Show toView
	utils.delay(50, function() {
		toView.visible = true;
		toView.opacity = 0;
		toView.scale = 0.8;
		toView.y = 300;
		toView.animate({
			origin: "50% 0%",
			properties: {
				opacity: 1,
				scale: 1,
				y: 0
			},
			curve: "spring(200, 20, 500)",
		}).on("end", function() {
			shadowView.destroy();
		});
	});
}


// Show modal view function
var hideModalView = function(enterView, exitView, setUp) {

	if (typeof setUp == "function") {
		setUp();
	}

	// Shadow layer to cover enterView
	var shadowView = new View({
		x: 0, y: 0,
		width: Views.homePlans.width, height: Views.homePlans.height,
		style: {
			backgroundColor: "#000"
		},
		visible: true,
		opacity: 1,
		superView: enterView
	});
	shadowView.bringToFront();

	// Hide shadow
	shadowView.animate({
		properties: {
			opacity: 0
		},
		curve: "ease-out",
		time: 350
	});

	// Show enterView
	enterView.scale = 0.8;
	enterView.animate({
		origin: "50% 0%",
		properties: {
			scale: 1,
			y: 0
		},
		curve: "ease-out",
		time: 300
	});

	// Hide exitView
	utils.delay(50, function() {
		exitView.visible = true;
		exitView.opacity = 1;
		exitView.scale = 1;
		exitView.y = 0;
		exitView.animate({
			origin: "50% 0%",
			properties: {
				opacity: 0,
				scale: 1.2,
				y: -300
			},
			curve: "spring(200, 20, 500)",
		}).on("end", function() {
			exitView.visible = false;
			shadowView.destroy();
		});
	});
}
