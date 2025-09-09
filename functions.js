const input = document.getElementById("input");
let isTyping = false;
let hasOperator = false;
let firstNumber = false;
let timesOfCalculations = 0;
const numberButtons = document.querySelectorAll(".numbers");
numberButtons.forEach(number => {
    number.addEventListener("click", () =>{
        if (isTyping) return;
        firstNumber = true;
        let numberValue = number.textContent;
        input.value += numberValue;
        console.log(numberValue);
        input.scrollLeft = input.scrollWidth;
    });
});


const clearButton = document.querySelectorAll(".operator");
clearButton.forEach(clear => {
    if (clear.id !== "play-music" && clear.id !== "clear-button") { 
        clear.addEventListener("click", () => {
            hasOperator = true;
            if (isTyping) return; 
        
            firstNumber = false;
            input.classList.remove('typing-cursor');
        });
    }
});

const playMusicButton = document.getElementById("play-music")
playMusicButton.addEventListener("click", () => {
    if (isTyping) return;
    timesOfCalculations++;
    if (!hasOperator || !firstNumber){
        typeMessage("You have to make an operation first")
        return;
    }
    if(timesOfCalculations === 5){
        typeMessage("yot, i really want it to be us, i really want it to be you. as much as i want to tell you this in person, i just cant because im scared you might break. i really hate it when you cry cause i have really have to try and stay composed. im literally coding on my phone while im at the bus, hoping you'll find this sooner than ever. I cant keep it off my mind so I have to write it down. FOR FUCKS SAKE ALL I WANT IS FOR YOU TO TELL ME YOU NEED ME. TELL ME YOU WANT ME TO STAY AND THAT YOULL CHOOSE ME OVER ANYBODY ELSE. YOT, I AM AND WILL ALWAYS BE YOURS. IF YOU'LL LOSE THE LOVE YOU HAVE, AND, IF EVER, YOU'LL LOOK FOR IT AGAIN, I HOPE YOU'LL GIVE US A CHANCE. I LOVE YOU NOW AND FOREVER.");
    }else{
        const audio = document.querySelector(".let-it-be");
        audio.play().catch(e => {
            console.log("Audio playback failed - this is normal in many browsers without user interaction");
        });
        let numberShuffler = Math.floor(Math.random() * messagePicker.length)
        let selectedMessage = messagePicker[numberShuffler];
        typeMessage(selectedMessage);
    }
});

const messagePicker = [
    "told ya you can do it",
    "congrats our little braniac"
    ]

function typeMessage(message) {
    isTyping = true;
    input.value = "";
    hasOperator = false;
    input.classList.add('typing-cursor');
    
    let i = 0;
    const typeInterval = setInterval(() => {
        if (i < message.length) {
            input.value += message[i];
            input.scrollLeft = input.scrollWidth;
            i++;
        } else {
            clearInterval(typeInterval);
            input.classList.remove('typing-cursor');
            isTyping = false;
            
            setTimeout(() => {
                if (!isTyping) {
                    input.value = "";
                }
            }, 1000);
        }
    }, 50);

}







