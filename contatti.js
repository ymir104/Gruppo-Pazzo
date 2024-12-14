function openOverlay(imageSrc) {
	const overlay = document.getElementById("imageOverlay");
	const overlayImage = document.getElementById("overlayImage");
	overlayImage.src = imageSrc; // Imposta l'immagine cliccata nell'overlay
	overlay.style.display = "flex"; // Mostra l'overlay
 }
 
 function closeOverlay() {
	const overlay = document.getElementById("imageOverlay");
	overlay.style.display = "none"; // Nasconde l'overlay
 }