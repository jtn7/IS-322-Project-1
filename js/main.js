var carouselImgs = ['jar-sun', 'facing-up', 'underwater', 'water-hands']
var carouselCounter = 0
var carousel = null

setInterval(function(){carousel_right()},5000)

function carousel_left() {
	if (carouselCounter == 0) {
		carouselCounter = 3
	} else {
		--carouselCounter
	}
	document.getElementById("carousel").style.backgroundImage = 'url("img/' + carouselImgs[carouselCounter] + '.jpg")'
}

function carousel_right() {
	if (carouselCounter == 3) {
		carouselCounter = 0
	} else {
		++carouselCounter
	}
	document.getElementById("carousel").style.backgroundImage = 'url("img/' + carouselImgs[carouselCounter] + '.jpg")'
}
