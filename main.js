let slideIndex=1;

showSlides(slideIndex);
//fonction qui au click fait passer à l'image suivante.
function plusSlides() {
  showSlides((slideIndex += 1));
}
//fonction qui fait changer d'image en fonction des puces
function currentSlide(n) {
  showSlides((slideIndex = n));
}
/*autre façon de faire clicker les puces ce serait de le faire avec une boucle
anonyme ou avec une fonction défini
for(lest i = 0; i<dots.length; i++){
  dots(i.addEnventListtener('click, onClickDot)
  On fait une fonction plus loin 
  function onclickDot(event){
    const clickDot= event.currentTarget;
    const newIndex=clickedDot.dataset.index;
    currentIndex=newIndex;
    refresh();
}
    Dans le DOM on peut stocker une information ex= <div data-index="0">*/
//Fonction principale qui permet de gerer le défilement des images et des puces pour le slideshow
function showSlides(n) {
  let i;
  let slides = document.querySelectorAll(".other");
  let dots = document.querySelectorAll(".button");
   
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// fonction qui va gérer le start and stop du slideshow.
let playPause= setInterval(plusSlides,3000);
let playing = true;
const start = document.getElementById("play");

function pauseSlideshow(){  
	playing = false;
	clearInterval(playPause);
  start.textContent = 'Play';
}

function playSlideshow(){  
	playing = true;
	playPause = setInterval(plusSlides,3000);
  start.textContent = 'Pause';
}

start.onclick = function(){
	if(playing){ pauseSlideshow(); }
	else{ playSlideshow(); }
};
