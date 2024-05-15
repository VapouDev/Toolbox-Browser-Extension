// Dans popup.js
document.addEventListener('DOMContentLoaded', function() {
    // Trouver le bouton par son identifiant ou sa classe CSS
    var shopButton = document.querySelector('.shop');

    // Ajouter un gestionnaire d'événements pour le clic sur le bouton
    shopButton.addEventListener('click', function() {
        // Rediriger vers la page HTML du magasin
        window.location.href = chrome.runtime.getURL('pages/shop/shop.html');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Trouver le bouton par son identifiant ou sa classe CSS
    var toolsButton = document.querySelector('.tools');

    // Ajouter un gestionnaire d'événements pour le clic sur le bouton
    toolsButton.addEventListener('click', function() {
        // Rediriger vers la page HTML des paramètres
        window.location.href = chrome.runtime.getURL('pages/tools/tools.html');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Trouver le bouton GitHub par sa classe CSS
    var githubButton = document.querySelector('.github');

    // Ajouter un gestionnaire d'événements pour le clic sur le bouton GitHub
    githubButton.addEventListener('click', function() {
        // Ouvrir une nouvelle page dans le navigateur avec l'URL GitHub
        chrome.tabs.create({ url: 'https://vapoutoolbox.fr' });
    });

});