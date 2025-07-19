document.addEventListener("DOMContentLoaded", () => {
  const STORAGE_KEY = 'blueLockSelectedEpisodes';
  let selected = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

  document.querySelectorAll('.episode-card').forEach(card => {
    const num = card.getAttribute('data-episode');
    const nameEl = card.querySelector('.ep-name');
    if (selected.includes(num)) nameEl.classList.add('selected');

    card.addEventListener('click', () => {
      nameEl.classList.toggle('selected');
      selected = selected.includes(num)
        ? selected.filter(n => n !== num)
        : [...selected, num];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(selected));
    });
  });
});
