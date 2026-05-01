document.addEventListener('DOMContentLoaded', function() {
    const bubblesContainer = document.getElementById('bubbles');
    const emojis = ['💖', '🌸', '✨', '💕', '🌷', '💗', '🌹', '💞', '🌺', '💓'];

    function createBubble() {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        bubble.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        bubble.style.left = Math.random() * 100 + '%';
        bubble.style.animationDuration = (Math.random() * 4 + 4) + 's';
        bubble.style.fontSize = (Math.random() * 1.5 + 1.5) + 'em';
        bubblesContainer.appendChild(bubble);

        setTimeout(() => {
            bubble.remove();
        }, 6000);
    }

    setInterval(createBubble, 500);
});