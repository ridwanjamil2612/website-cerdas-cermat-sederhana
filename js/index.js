// script.js
document.addEventListener('DOMContentLoaded', function() {
    const scores = [0, 0, 0]; // Initialize scores for each team

    document.getElementById('update-score').addEventListener('click', function() {
        for (let i = 0; i < scores.length; i++) {
            // Randomly increase the score by 1 to 10 points
            scores[i] += Math.floor(Math.random() * 10) + 1;
            document.getElementById(`score-team-${i+1}`).textContent = scores[i];
        }
    });
});
