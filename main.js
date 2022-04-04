const evaluation = document.querySelectorAll('.circle'); 
const button = document.querySelector('.btn__submit');
const front = document.querySelector('.card__face--front');
const back = document.querySelector('.card__face--back');
let span = document.querySelector('.button__pressed'); 


for (let i = 0; i < evaluation.length; i++) {         //creates a bucle for every circle in the card
	evaluation[i].addEventListener('click', () => {
		let rating = evaluation[i].innerHTML;		//keep the value of the circle pressed 
		for(let i = 0; i < evaluation.length; i++){			//create a loop to add the class selected from CSS and its properties
			evaluation[i].classList.contains('.selected');
			evaluation[i].classList.remove('.selected');
		}
		evaluation[i].classList.add('selected');
		button.addEventListener('click', () => {    //if the submit button is pressed
			front.style.display = 'none';			
			back.style.display = 'block';			//this makes the back of the card appear
			span.innerHTML = rating;				//puts in the orange rectangle below the image the value that was selected in the front
		});
	});
}


