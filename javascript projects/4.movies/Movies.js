const form = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const movieContainer = document.getElementById('movie-container');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const searchTerm = searchInput.value;
    if (searchTerm) {
        const movies = await searchMovies(searchTerm);
        displayMovies(movies);
    }
});

async function searchMovies(searchTerm) {
    const response = await fetch(
      `http://www.omdbapi.com/?s=${searchTerm}&apikey=60ae90bb`
    );
    const data = await response.json();
    return data.Search;
}

function displayMovies(movies) {
    if (!movies) {
        movieContainer.innerHTML = '<p>No movies found</p>';
        return;
    }

    movieContainer.innerHTML = movies
        .map(movie => {
            return `
                <div class="movie">
                    <img src="${movie.Poster === 'N/A' ? 'https://via.placeholder.com/300x450' : movie.Poster}" alt="${movie.Title}">
                    <h3>${movie.Title}</h3>
                    <p>${movie.Year}</p>
                </div>
            `;
        })
        .join('');
}
