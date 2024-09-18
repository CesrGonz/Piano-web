import getNoteFromKey from './noteUtils';
import './style.css';
import * as Tone from 'tone';


let keys = document.querySelectorAll('.key');

for(let key of keys){
    let noteToPlay = key.getAttribute('data-note');
    key.addEventListener(`mousedown`, () => playNote(noteToPlay));
    key.addEventListener('mouseup', () => stopnote());
    key.addEventListener('mouseleave', () => stopnote());
}



document.addEventListener('keypress', ctrlKeyboard);
document.addEventListener('keyup', stopnote);


function ctrlKeyboard(event){
    let keyname = event.key
   let note = getNoteFromKey(keyname); 
   playNote(note);
    
}

//const synth = new Tone.Synth().toDestination();
const synth = new Tone.Sampler({
	urls: {
		C4: "C4.mp3",
		"D#4": "Ds4.mp3",
		"F#4": "Fs4.mp3",
		A4: "A4.mp3",
        
	},
	release: 1,
	baseUrl: "https://tonejs.github.io/audio/salamander/",
}).toDestination();

Tone.loaded().then(() => {
	sampler.triggerAttackRelease(["Eb4", "G4", "Bb4"], 4);
});

function playNote(note){
//play a middle 'C' for the duration of an 8th note
synth.triggerAttackRelease(note);
}

function stopnote(){
    synth.triggerRelease();
}