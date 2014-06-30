// Manually generate guests views
Views.guestsView = new View({
	x: 0,
	y: 0,
	width: PSD["create"].width,
	height: PSD["create"].height,
	style: {
		backgroundColor: "#fff"
	},
	visible: false
});

Views.guestsNavigation = new ImageView({
	x: 0,
	y: 0,
	width: 640,
	height: 128,
	image: "images/navigation-guests.png"
});

Views.guestsContent  = new ScrollView({
	x: 0,
	y: Views.guestsNavigation.height,
	width: 640,
	height: 1136
});

Views.guestsContentList = new ImageView({
	x: 0,
	y: 0,
	width: 640,
	height: 1925,
	image: "images/guests-list.png",
	superView: Views.guestsContent
});

Views.guestsView.addSubView(Views.guestsNavigation);
Views.guestsView.addSubView(Views.guestsContent);


// Add guests
Views.guestsContentList.on("click", function(e) {
	var tickWrapper = new View({
		x: Views.guestsContentList.width - 90,
		y: e.offsetY - 42,
		width: 85, height: 85,
		style: {
			backgroundColor: "#fff"
		},
		superView: Views.guestsContentList
	});
	var tick = new ImageView({
		x: 0,
		y: 0,
		image: "images/guests-tick.png",
		width: 63, height: 57,
		superView: tickWrapper
	});
	tickWrapper.bringToFront();
});

// Exit guestview
Views.guestsNavigation.on("click", function() {
	var guestViewAdded = new ImageView({
		image: "images/create-guests-added.png",
		x: 0, y: Views.createContent.height + 2,
		width: 604, height: 508,
		superView: Views.createContent
	});
	Views.createContent.style.overflow = "auto";
	Views.createContent.height = 902;
	hideModalView(Views.createView, Views.guestsView);
});
