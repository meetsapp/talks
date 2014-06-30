// Generate navigationBar subviews
Views.createNavigation = Views.createView.childView["navigationbar"];
Views.createNavigationCategories = Views.createNavigation._subViews[0];
utils.generateChildViews(Views.createNavigationCategories)

// Hide all categories icon in navigationbar
for (var i in Views.createNavigationCategories.childView) {
	Views.createNavigationCategories.childView[i].visible = false;
}

// Generate content subviews
Views.createContent = Views.createView.childView["content"];
utils.generateChildViews(Views.createContent);

// Create inputs for name and description fields
Views.createContent.childView["name"].html = '<input type="text" class="field" placeholder="Nombre del plan">';
Views.createContent.childView["description"].html = '<input type="text" class="field" placeholder="Descripción">';

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

// Show guests view
Views.createContent.childView["add people"].on("click", function() {
	showModalView(Views.createView, Views.guestsView)
});

// Create plan
Views.createNavigation.on("click", function() {
	alert("Me encanta que los planes salgan bien");
	window.location.reload();
});
