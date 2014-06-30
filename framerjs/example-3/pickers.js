// Content view pickers

// Create scroll view
Views.createPicker = new View({
	x: 0,
	y: Views.createContent.childView["image"].y,
	width: Views.createContent.width,
	height: Views.createContent.childView["image"].height,
	superView: Views.createContent
});

// Add subviews
Views.createPicker.addSubView(Views.createContent.childView["image"]);
Views.createPicker.addSubView(Views.createContent.childView["location"]);
Views.createPicker.addSubView(Views.createContent.childView["date"]);

// Add picker details
Views.createPickerImageDetail = new ImageView({
	image: "images/create-image-detail.png",
	x: Views.createPicker.width+20, y: 15,
	width: 648, height: 144,
	visible: false,
	superView: Views.createPicker
});

Views.createPickerLocationDetail = new ImageView({
	image: "images/create-location-detail.png",
	x: Views.createPicker.width+20, y: 15,
	width: 604, height: 171,
	visible: false,
	superView: Views.createPicker
});

Views.createPickerDateDetail = new ImageView({
	image: "images/create-date-detail.png",
	x: Views.createPicker.width+20, y: 15,
	width: 648, height: 144,
	visible: false,
	superView: Views.createPicker
});

// Make pickerScrollView draggable
Views.createPicker.dragger = new ui.Draggable(Views.createPicker);

// Restricts only horizontal dragging
var pickerScrollViewY = Views.createPicker.y;
var pickerScrollViewWidth = Views.createPicker.width;
Views.createPicker.on(Events.DragMove, function() {
	Views.createPicker.y = pickerScrollViewY
});

// Animate on drag end and remove pickerDetails
Views.createPicker.dragger.on(Events.DragEnd, function(e) {
	Views.createPickerImageDetail.visible = false;
	Views.createPickerLocationDetail.visible = false;
	Views.createPickerDateDetail.visible = false;
	Views.createPicker.animate({
		properties: { x: 0 },
		curve: "spring(400, 20, 500)"
	});
});

// Set them the new position
Views.createContent.childView["image"].y = 0;
Views.createContent.childView["location"].y = 0;
Views.createContent.childView["date"].y = 0;

// Show pickerImageDetail
Views.createContent.childView["image"].on("click", function() {
	// Hide and show desired pickers
	Views.createPickerImageDetail.visible = true;
	Views.createPickerLocationDetail.visible = false;
	Views.createPickerDateDetail.visible = false;

	// Use new width and animate
	Views.createPicker.width = Views.createPicker.width + Views.createPickerImageDetail.width;
	Views.createPicker.animate({
		properties: {
			x: -pickerScrollViewWidth-20
		},
		curve: "spring(400, 30, 500)"
	})
	// Scroll to content
	// Views.createPicker._element.scrollLeft = Views.createPicker.width+20;
});

// Add image
Views.createPickerImageDetail.on("click", function() {
	console.log("click")
	Views.createContent.childView["image"].image = "images/image-added.png";
});

// Show pickerLocationDetail
Views.createContent.childView["location"].on("click", function() {
	// Hide and show desired pickers
	Views.createPickerLocationDetail.visible = true;
	Views.createPickerImageDetail.visible = false;
	Views.createPickerDateDetail.visible = false;

	// Use new width and animate
	Views.createPicker.width = Views.createPicker.width + Views.createPickerLocationDetail.width;
	Views.createPicker.animate({
		properties: {
			x: -pickerScrollViewWidth-20
		},
		curve: "spring(400, 30, 500)"
	})
});

// Add location
Views.createPickerLocationDetail.on("click", function() {
	Views.createContent.childView["location"].image = "images/location-added.png";
});

// Show pickerDateDetail
Views.createContent.childView["date"].on("click", function() {
	// Hide and show desired pickers
	Views.createPickerDateDetail.visible = true;
	Views.createPickerLocationDetail.visible = false;
	Views.createPickerImageDetail.visible = false;

	// Use new width and animate
	Views.createPicker.width = Views.createPicker.width + Views.createPickerDateDetail.width;
	Views.createPicker.animate({
		properties: {
			x: -pickerScrollViewWidth-20
		},
		curve: "spring(400, 30, 500)"
	})
});

// Add location
Views.createPickerDateDetail.on("click", function() {
	Views.createContent.childView["date"].image = "images/date-added.png";
});
