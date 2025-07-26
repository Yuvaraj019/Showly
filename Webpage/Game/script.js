// Import Supabase client from CDN
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

// Your Supabase credentials
const supabaseUrl = 'https://rlzuanjjeajyyhaebbos.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJsenVhbmpqZWFqeXloYWViYm9zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM1NTgyMjIsImV4cCI6MjA2OTEzNDIyMn0.vZFNSoCzGxqkqmO4ac0ScRw4xOVoz2scTAPX2Eq0WCw'

// Initialize Supabase client
const supabase = createClient(supabaseUrl, supabaseKey)

const gameContainer = document.getElementById('gameContainer')
const searchInput = document.getElementById('searchInput')
const logButton = document.getElementById('logGameBtn')

// Create game card DOM element
function createGameCard({ title, image }) {
  const gameDiv = document.createElement('div')
  gameDiv.className = 'game'

  const img = document.createElement('img')
  img.src = image || 'https://via.placeholder.com/260x150?text=No+Image'
  img.alt = title
  img.loading = 'lazy'

  const caption = document.createElement('div')
  caption.className = 'game-title'
  caption.textContent = title

  gameDiv.append(img, caption)
  return gameDiv
}

// Render game cards on the page
function renderGames(games) {
  gameContainer.innerHTML = ''
  games.forEach(game => {
    gameContainer.appendChild(createGameCard(game))
  })
}

// Fetch all games from Supabase
async function fetchGames() {
  const { data, error } = await supabase.from('games').select('*').order('id', { ascending: true })
  if (error) {
    alert('Failed to fetch games: ' + error.message)
    return
  }
  renderGames(data)
  return data
}

// Add a new game to Supabase
async function addGame(title, image) {
  const { data, error } = await supabase.from('games').insert([{ title, image }])
  if (error) {
    alert('Failed to add game: ' + error.message)
    return null
  }
  return data[0]
}

// Search games locally
function searchGames(games, query) {
  if (!query) return games
  return games.filter(game => game.title.toLowerCase().includes(query.toLowerCase()))
}

let allGames = []

// Initialize app
async function init() {
  allGames = await fetchGames() || []
}

logButton.addEventListener('click', async () => {
  const title = prompt('Enter game title:')
  if (!title || !title.trim()) {
    alert('Title cannot be empty.')
    return
  }
  const image = prompt('Enter image URL:')
  if (!image || !image.trim()) {
    alert('Image URL is required.')
    return
  }

  const newGame = await addGame(title.trim(), image.trim())
  if (newGame) {
    allGames.push(newGame)
    renderGames(allGames)
  }
})

searchInput.addEventListener('input', () => {
  const query = searchInput.value
  const filtered = searchGames(allGames, query)
  renderGames(filtered)
})

// Start the app
init()
