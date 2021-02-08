var app = app || {};


app.Animation = (function () {

	var banner = document.getElementById('banner');
	var tl = new TimelineMax();
	var t = TweenMax;

    var animationWindow = document.getElementById('animationWindow');

    var animData = {
        wrapper: animationWindow,
        animType: 'svg',
        loop: false,
        prerender: true,
        autoplay: false,
        path: './scripts/300x600-data.json'
    };

    

    var anim = bodymovin.loadAnimation(animData);
    var buttonExit = document.getElementById('button-exit');


	// --------------------------------------------------------------------------------------
	// set default properties
	function initialize() {
		// DO NOT EDIT: reveals banner once loaded
		// t.set(banner, {opacity:1});
		t.to(banner, .1, {opacity:1, delay:.2});


	}

	// --------------------------------------------------------------------------------------
	// Starts the animation
	function start() {

		anim.play();

		anim.setSpeed(1);
		
	}

	// --------------------------------------------------------------------------------------
	// Stops the animation
	function stop() {
		console.log("stopping animation");
	}

	// --------------------------------------------------------------------------------------
	// Publicly accessible methods and properties
	return {
		initialize:initialize,
		start:start,
		stop:stop
	}

})();
