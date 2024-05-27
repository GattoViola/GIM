function setup() {
	createCanvas(windowWidth, windowHeight)
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight)
}

function draw() {
	background(255)

	noStroke()
	fill(200)
	rect(0, height/3 * 2, second() / 60 * width, height/3)
	fill(12, 80, 70)
	rect(0, height/3 * 1, minute() / 60 * width, height/3)
	fill(0)
	rect(0, height/3 * 0, hour()   / 24 * width, height/3)




	let s = second()
	if (s < 10) {
		s = "0" + s
	}
	

	let m = minute()
	if (m < 10) {
		m = "0" + m
	}

	let h = hour()
	if (h < 10) {
	 	h = "0" + h
	}

	textAlign(CENTER, CENTER)
	textSize(60)
	fill(0)

	const ora = h + ":" + m + ":" + s
	text(ora, width/2, height/2)

}
