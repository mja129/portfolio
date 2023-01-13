const light = document.getElementById("light");
const black = document.getElementById("black");
const img = document.getElementById("img");
const text = document.getElementById("text");

function onSwitch() {
	img.hidden = true;
	black.hidden = false;
	setTimeout(() => {light.hidden = false;}, 1000)
	text.hidden = false;
}
addEventListener('mousemove', (event) => {
	light.style.transform = "translate(" + event.x + "px," + event.y + "px)";
});
