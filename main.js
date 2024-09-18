import './style.css';
import * as Tone from 'tone';

let keys = document.querySelectorAll('.key');

for(let key of keys){
    let noteToPlay = key.getAttribute('data-note');
    key.addEventListener(`mousedown`, () => playNote(noteToPlay));
    key.addEventListener('mouseup', () => stopnote());
    key.addEventListener('mouseleave', () => stopnote());
}

const synth = new Tone.Synth().toDestination();

function playNote(note){
//play a middle 'C' for the duration of an 8th note
synth.triggerAttackRelease(note);
}

function stopnote(){
    synth.triggerRelease();
}