// JavaScript for Bio Link Page

// Set current year in footer
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('year').textContent = new Date().getFullYear();
    
    // Button click effects
    const buttons = document.querySelectorAll('.button');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Don't add the effect if it's already there
            if (!this.classList.contains('button-click')) {
                this.classList.add('button-click');
                
                // Create ripple effect
                const ripple = document.createElement('span');
                ripple.classList.add('ripple');
                this.appendChild(ripple);
                
                const x = e.clientX - e.target.getBoundingClientRect().left;
                const y = e.clientY - e.target.getBoundingClientRect().top;
                
                ripple.style.left = `${x}px`;
                ripple.style.top = `${y}px`;
                
                // Remove ripple after animation completes
                setTimeout(() => {
                    ripple.remove();
                }, 600);
                
                // Remove the animation class after it completes
                setTimeout(() => {
                    this.classList.remove('button-click');
                }, 500);
            }
        });
        
        // Add hover sound effect (subtle)
        button.addEventListener('mouseenter', function() {
            playHoverSound();
        });
    });
    
    // Create and play hover sound
    function playHoverSound() {
        const hoverSound = new Audio();
        hoverSound.volume = 0.1; // Very subtle
        hoverSound.src = 'data:audio/mp3;base64,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';
    }
});
