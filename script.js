//your JS code here. If required.
const sounds = ["sound1", "sound2", "sound3", "sound4"]; // Sound filenames without extensions
        
        const buttonsContainer = document.getElementById("buttons");
        let currentAudio = null;

        sounds.forEach(sound => {
            const button = document.createElement("button");
            button.className = "btn";
            button.textContent = sound;
            button.onclick = () => {
                if (currentAudio) {
                    currentAudio.pause();
                    currentAudio.currentTime = 0;
                }
                currentAudio = new Audio(`sounds/${sound}.mp3`);
                currentAudio.play();
            };
            buttonsContainer.appendChild(button);
        });
        
        const stopButton = document.createElement("button");
        stopButton.className = "stop";
        stopButton.textContent = "Stop";
        stopButton.onclick = () => {
            if (currentAudio) {
                currentAudio.pause();
                currentAudio.currentTime = 0;
            }
        };
        buttonsContainer.appendChild(stopButton);