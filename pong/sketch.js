let posizioneX, posizioneY
let velX, velY

function setup() {
	createCanvas(windowWidth, windowHeight)

	posizioneX = width/2
	posizioneY = height/2

	velX = 8
	velY = 6
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight)
}
function draw() {
	
	posizioneX = posizioneX + velX
	posizioneY = posizioneY + velY

	if (posizioneX >= width) {
		velX = -velX
	}
	if (posizioneX < 0) {
		velX = -velX
	}

	if (posizioneY >= height) {
		velY = -velY
	}
	
	if (posizioneY < 0) {
		velY = -velY
	}

	background(0, 0, 0)
	stroke(2)
	circle(posizioneX, posizioneY, 300)

}
