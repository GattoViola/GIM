function setup() {
	createCanvas(windowWidth, windowHeight)
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight)
}

function draw() {
	background(200)

	translate(width/2, height/2)

	fill(255)

	const diam = 400

	circle(0, 0, diam)

	fill(0)
	textAlign(CENTER)
	text(12, 0, -diam * 0.45)

	fill(0)
	textAlign(CENTER)
	text(6, 0, -diam * -0.45)

	fill(0)
	textAlign(CENTER)
	text(3, 0, -6, 363)

	fill(0)
	textAlign(CENTER)
	text(9, 0, -6, -363)

	fill(0)
	circle(70, 163, 7, 30)

	fill(0)
	circle(130, 120, 7, 30)

	fill(0)
	circle(165, 64, 7, 30)
	

	fill(0)
	circle(-70, -163, 7, -30)

	fill(0)
	circle(-130, -120, 7, -30)

	fill(0)
	circle(-165, -64, 7, -30)


	fill(0)
	circle(-160, 63, 7, 130)

	fill(0)
	circle(-130, 120, 7, 30)

	fill(0)
	circle(-68, 157, 7, 30)

	fill(0)
	circle(160, -63, 7, -130)

	fill(0)
	circle(120, -120, 7, 30)

	fill(0)
	circle(68, -163, 7, 30)
	


	


	//stroke(0, 50)
	//line(-diam/2, 0, diam/2, 0)
	//line(0, -diam/2, 0, diam/2)

	noStroke()
	fill(0)

	push()
	rotate(TAU / 12 * (hour() % 12) + TAU / 12 / 60 * minute())
	rect(-8, 25, 16, -140)
	pop()

	push()
	rotate(TAU / 60 * minute())
	rect(-5, 25, 10, -170)
	pop()

	const m = (new Date()).getMilliseconds() / 1000 * TAU / 60
	fill(200, 80, 70)
	push()
	rotate(TAU / 60 * second() + m)
	rect(-2, 25, 4, -180)
	pop()

	fill(0)
	circle(0, 0, 12)

	
}