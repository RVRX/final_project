import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

var mountNode = document.getElementById("app");
ReactDOM.render(<App name="Gompei" />, mountNode);


// for legacy browsers
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioContext = new AudioContext();

// get the audio element
const audioElement = document.querySelector("audio");

// pass it into the audio context
const track = audioContext.createMediaElementSource(audioElement);

track.connect(audioContext.destination);

// Select our play button
const playButton = document.querySelector("#play-button");

playButton.addEventListener(
    "click",
    () => {
        // Check if context is in suspended state (autoplay policy)
        if (audioContext.state === "suspended") {
            audioContext.resume();
        }

        // Play or pause track depending on state
        if (playButton.dataset.playing === "false") {
            audioElement.play();
            playButton.dataset.playing = "true";
        } else if (playButton.dataset.playing === "true") {
            audioElement.pause();
            playButton.dataset.playing = "false";
        }
    },
    false
);


audioElement.addEventListener(
    "ended",
    () => {
        playButton.dataset.playing = "false";
        playButton.click();
    },
    false
);