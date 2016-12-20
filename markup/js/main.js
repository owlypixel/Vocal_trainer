
var ac = new AudioContext();
var inst = Soundfont.instrument(ac, 'acoustic_grand_piano');
//grab all needed elements from the page
const eyes = document.querySelectorAll('.eye');
const mouth = document.querySelector('.mouth');
const ears = document.querySelectorAll('.ear');
const keys = document.querySelectorAll('.key');
const enc = document.querySelector('.encouragement');
const joke = document.querySelector('.joke');

function selectKey(keycode){
	var key = document.querySelector(".key[data-key='" + keycode + "']");
	return key ? key : "Key wasn't found"; 
}

var notePlayed = false; //this flag needed to prevent notes repeating
window.addEventListener('keydown', function(e){
	if(!notePlayed){
		if(e.keyCode == 65){
			playNote('C4');
			addAnimations(eyes, mouth, ears, selectKey(e.keyCode));
		} else if(e.keyCode == 83){
			playNote('D4');
			addAnimations(eyes, mouth, ears, selectKey(e.keyCode));
		} else if(e.keyCode == 68){
			playNote('E4');
			addAnimations(eyes, mouth, ears, selectKey(e.keyCode));
		} else if(e.keyCode == 70){
			playNote('F4');
			addAnimations(eyes, mouth, ears, selectKey(e.keyCode));
		} else if(e.keyCode == 71){
			playNote('G4');
			addAnimations(eyes, mouth, ears, selectKey(e.keyCode));
		} else if(e.keyCode == 72){
			playNote('A4');
			addAnimations(eyes, mouth, ears, selectKey(e.keyCode));
		} else if(e.keyCode == 74){
			playNote('B4');
			addAnimations(eyes, mouth, ears, selectKey(e.keyCode));
		} else if(e.keyCode == 75){
			playNote('C5');
			addAnimations(eyes, mouth, ears, selectKey(e.keyCode));
		} else {
			return;
		}
		notePlayed = true;
	}
})

window.addEventListener('keyup', function(e){
	removeAnimations(eyes, mouth, ears, keys);
	notePlayed = false;
})

function playNote(note){
	inst.then(function (piano) {
		piano.play(note);
	})
}
function addAnimations(eyes, mouth, ears, key){
	eyes.forEach(function(eye){
		eye.classList.add('wink');
	});
	ears.forEach(function(ear){
		ear.classList.add('low');
	});
	key.classList.add('active');
	mouth.classList.add('open');
	changeEncouragement();
}
function removeAnimations(eyes, mouth, ears, key){
	eyes.forEach(function(eye){
		eye.classList.remove('wink');
	});
	ears.forEach(function(ear){
		ear.classList.remove('low');
	});
	keys.forEach(function(key){
		key.classList.remove('active');
	});
	mouth.classList.remove('open');
}

function changeEncouragement(){
	enc.textContent = encouragements[Math.floor(Math.random()*encouragements.length)];
	joke.textContent = jokes[Math.floor(Math.random()*jokes.length)];
}

var encouragements = ['Good!', 'Great!', 'Awesome!', 'Cool!', 'Master!', 'Super!', 'Amazing!', 'Badass'];
var jokes = [
	'Almost like Freddie Mercury.',
	'Extraordinary phenomenon, keep on.',
	'Mind blowing, out of this world.',
	'Literally impossible, amazeballs.',
	'Supercalifragilisticexpialidocious.',
	'Miraculous, you are doing great.',
	'Breathtaking, stunning performance.',
	'Yo singing is so great, continue.',
	'Miraculous Har-money, A deep-C diva.',
	'Don\'t miss the key change...',
	'If you don\'t C sharp - you\'ll B flat!'
];


