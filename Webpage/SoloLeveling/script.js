document.addEventListener("DOMContentLoaded", () => {
  const selectedEpisodesKey = 'selectedEpisodes';
  let selectedEpisodes = JSON.parse(localStorage.getItem(selectedEpisodesKey)) || [];

  // All episode cards
  const episodeCards = document.querySelectorAll('.episode-card');

  // Load saved selections
  selectedEpisodes.forEach(epNum => {
    const card = document.querySelector(`.episode-card[data-episode="${epNum}"]`);
    if (card) {
      card.querySelector('.ep-name').classList.add('selected');
    }
  });

  // Toggle selection on click
  episodeCards.forEach(card => {
    card.addEventListener('click', () => {
      const epNum = card.getAttribute('data-episode');
      const epName = card.querySelector('.ep-name');

      if (epName.classList.contains('selected')) {
        // Unselect
        epName.classList.remove('selected');
        selectedEpisodes = selectedEpisodes.filter(n => n !== epNum);
      } else {
        // Select
        epName.classList.add('selected');
        selectedEpisodes.push(epNum);
      }
      localStorage.setItem(selectedEpisodesKey, JSON.stringify(selectedEpisodes));
    });
  });

  // Reset selections on clicking "ANIME" text
  const animeText = document.querySelector('.anime-text');
  animeText.addEventListener('click', () => {
    selectedEpisodes = [];
    localStorage.removeItem(selectedEpisodesKey);
    document.querySelectorAll('.ep-name.selected').forEach(el => {
      el.classList.remove('selected');
    });
  });
});
