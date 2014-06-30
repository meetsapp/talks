// Generate navigationBar subviews
var navigationbar = createView.childView["navigationbar"];
var selectedCategory = navigationbar._subViews[0];
utils.generateChildViews(selectedCategory)

// Hide all categories icon in navigationbar
for (var i in selectedCategory.childView) {
	selectedCategory.childView[i].visible = false;
}

// Generate content subviews
var createContentView = createView.childView["content"];
utils.generateChildViews(createContentView);

// Create inputs for name and description fields
createContentView.childView["name"].html = '<input type="text" class="field" placeholder="Nombre del plan">';
createContentView.childView["description"].html = '<input type="text" class="field" placeholder="Descripción">';

// Category colors
var categoryColors  = {
	pubs: "#f1b71a",
	concert: "#df4985",
	party: "#15c7ac",
	sport: "#4bc533",
	restaurant: "#e65647",
	cinema: "#6250cd",
	travel: "#8bc820",
	cultural: "#a856f5",
	meeting: "#9b8258",
	birthday: "#469fe4",
	dating:"#f556b4",
	other: "#fca829"
}

// Show create view function
var showCreateView = function(category) {

	// Set navigationBar color & icon from category
	navigationbar.style.backgroundColor = categoryColors[category];
	selectedCategory.childView["selected-"+category].visible = true;

	// Hide homeView
	shadowHome.visible = true;
	shadowHome.opacity = 0;
	shadowHome.animate({
		properties: {
			opacity: 1
		},
		curve: "ease-out",
		time: 150
	});
	homeView.animate({
		origin: "50% 0%",
		properties: {
			scale: 0.9,
			y: -100
		},
		curve: "ease-out",
		time: 100
	});

	// Show createView
	utils.delay(50, function() {
		categoryItem.name
		createView.visible = true;
		createView.opacity = 0;
		createView.scale = 0.8;
		createView.y = 300;
		createView.animate({
			origin: "50% 0%",
			properties: {
				opacity: 1,
				scale: 1,
				y: 0
			},
			curve: "spring(200, 20, 500)",
		});
	});
}
