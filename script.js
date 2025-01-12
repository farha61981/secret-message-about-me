// JavaScript to add any dynamic effects or interactions
document.addEventListener("DOMContentLoaded", function() {
    // Example of background animation effect
    const body = document.querySelector('body');
    let colors = ['#ff6347', '#1e90ff', '#32cd32', '#ff1493'];
    let index = 0;

    function changeBackgroundColor() {
        body.style.backgroundColor = colors[index];
        index = (index + 1) % colors.length;
    }

    setInterval(changeBackgroundColor, 5000); // Change color every 5 seconds
});
