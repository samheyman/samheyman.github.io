function fillText() {
	setTimeout(insertText, 2000);
}

function insertText() {
	document.getElementById("output").innerHTML="<p>Hello Sam!</p>";
		document.getElementById("screenInfo").innerHTML="x: " + window.screenX + ", y: " + window.screenY;

}
