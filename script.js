document.addEventListener("DOMContentLoaded", function () {
    const noButton = document.getElementById("no-btn");
    const yesButton = document.getElementById("yes-btn");
    const responseText = document.getElementById("response-text");

    // Function to move the "No" button when hovered
    noButton.addEventListener("mouseover", function () {
        const randomTop = Math.random() * (window.innerHeight - 50); // Prevent overflow
        const randomLeft = Math.random() * (window.innerWidth - 100);
        
        noButton.style.position = "absolute";
        noButton.style.top = randomTop + "px";
        noButton.style.left = randomLeft + "px";
    });

    // Function to show message and trigger confetti when "Yes" is clicked
    yesButton.addEventListener("click", function () {
        responseText.innerText = "Love ya, see you next week!";
        yesButton.style.display = "none";
        noButton.style.display = "none";

        startConfetti(); // Start the confetti animation
    });

    // Confetti Animation Function
    function startConfetti() {
        const confettiContainer = document.createElement("div");
        confettiContainer.classList.add("confetti-container");
        document.body.appendChild(confettiContainer);

        for (let i = 0; i < 100; i++) {
            const confettiPiece = document.createElement("div");
            confettiPiece.classList.add("confetti");
            confettiPiece.style.left = Math.random() * 100 + "vw";
            confettiPiece.style.animationDelay = Math.random() * 2 + "s";
            confettiPiece.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
            confettiContainer.appendChild(confettiPiece);
        }

        // Remove confetti after 5 seconds
        setTimeout(() => {
            confettiContainer.remove();
        }, 5000);
    }
});