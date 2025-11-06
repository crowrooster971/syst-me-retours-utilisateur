document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const userName = document.getElementById('user-name').value;
    const feedback = document.getElementById('feedback').value;
    console.log(`Nom: ${userName}, Retour: ${feedback}`);
    alert('Merci pour votre retour !');
    this.reset();
});