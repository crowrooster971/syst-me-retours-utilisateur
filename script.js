document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const userName = document.getElementById('user-name').value;
    const feedbackText = document.getElementById('feedback').value;
    console.log(`Nom: ${userName}, Retour: ${feedbackText}`);
    alert('Thank you for your feedback!');
    this.reset();
});