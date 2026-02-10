// Concepts: setInterval

// Assignments
// Create a countdown timer using setInterval.

function countdownTimer(seconds) {
    let timer = setInterval(() => {
        seconds--;
        console.log(seconds);
        if (seconds === 0) {
            clearInterval(timer);
        }
    }, 1000);
}
countdownTimer(10);