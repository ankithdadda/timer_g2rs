let time = 0;
let interval; 

function start() {
    clearInterval(interval); 
    interval = setInterval(countdown, 1000);
    document.getElementById("timer").textContent = time;
}

function countdown() {
    time++;
    document.getElementById("timer").textContent = time;

    if (time >= 30) {
        clearInterval(interval);
        document.getElementById("message").textContent = "Time plays a significant role in human life. If you understand the value of time better, you can gain experience and develop skills over time. Time is crucial for personal growth, creativity, productivity, and overall well-being, as it enables us to plan, learn, reflect, and experience the world. Every moment shapes our experiences, decisions, and growth. Without time, opportunities fade, memories vanish, and life's meaning diminishes. Understanding the value of time helps us make the most of every moment and avoid wasting it. Time is finite and once it's gone, it cannot be regained.";
    }
}

function restart() {
    time = 0; 
    document.getElementById("message").textContent = "";
    document.getElementById("timer").textContent = time;
    start();
}
