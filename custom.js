// Custom cursor effect (sparkle)
const cursor = document.getElementById('cursor');
const cursorEffect = document.getElementById('cursor-effect');

document.addEventListener('mousemove', (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Position the cursor effect at mouse location
    cursor.style.left = `${mouseX - cursor.offsetWidth / 2}px`;
    cursor.style.top = `${mouseY - cursor.offsetHeight / 2}px`;
});
