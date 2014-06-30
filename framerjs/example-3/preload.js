// Preload all images for our views
var imagesLength = 0;
var imagesLoaded = 0;
var loadImage = function(path, callback) {
	var img = new Image();
	img.src = path;
	imagesLength++;
	img.onload = function() {
		imagesLoaded++;
		// All images loaded, then animate splash and show int view
		if (imagesLength == imagesLoaded) {
			InitializeApp();
			utils.delay(200, function() {
				Views.splash.animate({
					properties: {
						opacity: 0,
						scale: 2
					},
					curve: "ease-out",
					time: "300"
				});
				utils.delay(400, function() {
					Views.splash.visible = false;
				})
			})
		}
		if (typeof callback == "function") {
			callback();
		}
	}
}

// First load splash image, then load all imageViews
loadImage(Views.splash._image, function() {
	for (var i in Views) {
		if (Views[i]._image) {
			loadImage(Views[i]._image)
		} else if (Views[i].childView) {
			for (var e in Views[i].childView) {
				if (Views[i].childView[e]._image) {
					loadImage(Views[i].childView[e]._image)
				}
			}
		}
	}

})
