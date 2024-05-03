document.addEventListener('DOMContentLoaded', function() {
    const heart = document.querySelector('.heart');

    setTimeout(() => {
        heart.style.animation = 'none'; // Disable the heartbeat animation
        setTimeout(() => {
            heart.style.animation = 'heartbeat 1s infinite alternate'; // Re-enable the animation
        }, 100); // Wait for a short time before re-enabling to restart the animation
    }, 500); // Delay before triggering the surprise effect (adjust as needed)
});
