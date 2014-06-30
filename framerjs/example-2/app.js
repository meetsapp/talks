// Setup viewportsize
if (window.devicePixelRatio == 1) {
	document.body.style.webkitTransformOrigin = "left top";
	document.body.style.webkitTransform = "scale(0.5)";
}

// Utils obj previously defined by Framer: http://www.framerjs.com/documentation/index.html#utilities
// Child view generator mView.childView["view-name"];
utils.generateChildViews = function(parentView) {
	parentView.childView = {};
	 for (var i in parentView._subViews) {
		parentView.childView[parentView._subViews[i].name] = parentView._subViews[i];
	 }
}

// Generate needed child views
var homeView = PSD["home"];
utils.generateChildViews(homeView);
// homeView.childView["my-view"]

var createView = PSD["create"];
utils.generateChildViews(createView);
//createView.childView["my-view"]


// Setup initial state
createView.visible = false;

