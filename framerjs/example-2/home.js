// Create variables for our views
var wrapper = homeView.childView["plan-list"];
var shadow = new View({
	x: 0, y: 0,
	width: wrapper.width, height: wrapper.height,
	style: {
		backgroundColor: "rgba(0, 0, 0, 0.75)"
	},
	superView: wrapper
});
var popUp = homeView.childView["category-selector"];
var icon = homeView.childView["logo-selected"];

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
			origin: "50% 100%",
			properties: {
				opacity: 1,
				scale: 1,
				y: 445 //Default position
			},
			curve: "spring(1000, 20, 500)"
		});
	});
});


// Generate Subviews: Pop-up category items
var homeCategoriesView = homeView.childView["category-selector"]._subViews[0];
utils.generateChildViews(homeCategoriesView);

// Shadow layer to cover homeView
var shadowHome = new View({
	x: 0, y: 0,
	width: wrapper.width, height: wrapper.height,
	style: {
		backgroundColor: "rgba(0, 0, 0, 0.75)"
	},
	visible: false,
	superView: homeView
});
shadowHome.bringToFront();

// Add click event to pop-up category item
for (var i in homeCategoriesView.childView) {
	var categoryItem = homeCategoriesView.childView[i];
	categoryItem.on("click", function(e) {
		var categoryItemName = this.getAttribute("name");
		showCreateView(categoryItemName);
	});
}
