document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.package-card');

    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px) scale(1.05)';
            cards.forEach(otherCard => {
                if (otherCard !== card) {
                    otherCard.style.opacity = '0.8';
                }
            });
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
            cards.forEach(otherCard => {
                otherCard.style.opacity = '1';
            });
        });
    });

    // Ensure all cards have equal height
    function equalizeCardHeights() {
        const cards = document.querySelectorAll('.package-card');
        let maxHeight = 0;

        // Reset heights
        cards.forEach(card => {
            card.style.height = 'auto';
        });

        // Find max height
        cards.forEach(card => {
            const height = card.offsetHeight;
            maxHeight = Math.max(maxHeight, height);
        });

        // Apply max height to all cards
        cards.forEach(card => {
            card.style.height = `${maxHeight}px`;
        });
    }

    // Run on load and resize
    window.addEventListener('load', equalizeCardHeights);
    window.addEventListener('resize', equalizeCardHeights);

    // Add click animation to buttons
    const buttons = document.querySelectorAll('.calculate-btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const ripple = document.createElement('span');
            ripple.style.cssText = `
                position: absolute;
                background: rgba(255, 255, 255, 0.7);
                border-radius: 50%;
                pointer-events: none;
                width: 100px;
                height: 100px;
                left: ${x - 50}px;
                top: ${y - 50}px;
                transform: scale(0);
                animation: ripple 0.6s linear;
            `;

            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);

            setTimeout(() => ripple.remove(), 600);
        });
    });
});

// Add ripple animation to stylesheet
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;