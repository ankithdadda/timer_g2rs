let time = 30;
let interval; 

function updateDisplay() {
    document.getElementById("timer").textContent = time;
}

function start() {
    clearInterval(interval); 
    interval = setInterval(countdown, 1000);
}

function countdown() {
    time--;
    updateDisplay();

    if (time <= 0) {
        clearInterval(interval);
        document.getElementById("message").textContent = "Time plays a significant role in human life. If you understand the value of time better, you can gain experience and develop skills over time. Time is crucial for personal growth, creativity, productivity, and overall well-being, as it enables us to plan, learn, reflect, and experience the world. Every moment shapes our experiences, decisions, and growth. Without time, opportunities fade, memories vanish, and life's meaning diminishes. Understanding the value of time helps us make the most of every moment and avoid wasting it. Time is finite and once it's gone, it cannot be regained. ";
    }
}

function restart() {
    time = 30; 
    document.getElementById("message").textContent = "";
    updateDisplay();
    start();
}

updateDisplay();
