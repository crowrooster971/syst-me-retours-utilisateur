document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const userName = document.getElementById('user-name').value;
    const feedbackText = document.getElementById('feedback').value;
    console.log(`Nom: ${userName}, Retour: ${feedbackText}`);
    alert('Merci pour votre retour !');
    this.reset();
});