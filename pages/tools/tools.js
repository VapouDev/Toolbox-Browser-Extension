document.addEventListener('DOMContentLoaded', function() {

  // Trouver tous les boutons avec la classe 'openLink'
  const buttons = document.querySelectorAll('.openLink');

  // Fonction pour gérer l'ouverture des liens
  function openLink(event) {
      // Récupération du lien à partir de l'attribut data-link
      const linkToOpen = event.target.getAttribute('data-link');
    
      // Ouvrir le lien dans un nouvel onglet
      chrome.tabs.create({ url: linkToOpen });
  }

  // Ajout d'un gestionnaire d'événements à chaque bouton
  buttons.forEach(button => {
      button.addEventListener('click', openLink);
  });
});
