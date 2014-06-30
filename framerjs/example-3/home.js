// Create variables for our views
Views.homePlans = Views.homeView.childView["plan-list"];
var shadowLayer = new View({
	x: 0, y: 0,
	width: Views.homePlans.width, height: Views.homePlans.height,
	style: {
		backgroundColor: "rgba(0, 0, 0, 0.75)"
	},
	superView: Views.homePlans
});
Views.homePopup = Views.homeView.childView["category-selector"];
Views.homeIcon = Views.homeView.childView["logo-selected"];

// Setup inital state for our views
shadowLayer.visible = false;
Views.homePopup.visible = false;
Views.homeIcon.visible = false;

// Show Views.homePopup
Views.homePlans.on("click", function() {

	// Animate Views.homeIcon
	Views.homeIcon.visible = true;
	Views.homeIcon.opacity = 0;
	Views.homeIcon.animate({
		properties: {
			opacity: 1
		},
		curve: "linear",
		time: "200"
	});

	// Animate shadowLayer
	shadowLayer.visible = true;
	shadowLayer.opacity = 0;
	shadowLayer.animate({
		properties: {
			opacity: 1
		},
		curve: "ease-out",
		time: "100"
	});

	// Animate Views.homePopup
	Views.homePopup.visible = true;
	Views.homePopup.opacity = 0;
	Views.homePopup.scale = 0.8;
	Views.homePopup.y = 460;
	utils.delay(150, function() {
		Views.homePopup.animate({
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
Views.homeCategories = Views.homeView.childView["category-selector"]._subViews[0];
utils.generateChildViews(Views.homeCategories);

// Add click event to pop-up category item
for (var i in Views.homeCategories.childView) {
	// Get category name
	var categoryItem = Views.homeCategories.childView[i];

	// Add event
	categoryItem.on("click", function(e) {
		// Get category name
		var categoryItemName = this.getAttribute("name");
		showModalView(Views.homeView, Views.createView, function() {

			// Set navigationBar category color on create view
			Views.createNavigation.style.backgroundColor = categoryColors[categoryItemName];
			// Show navigationBar category icon on create view
			Views.createNavigationCategories.childView["selected-"+categoryItemName].visible = true;
		});
	});
}
