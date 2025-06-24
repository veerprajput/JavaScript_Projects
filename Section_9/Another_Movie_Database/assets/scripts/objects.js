const movieList = document.getElementById('movie-list');
const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

let movies = [];

const renderMovies = (filter = '') => {
    if (movies.length === 0) {
        movieList.classList.remove('visible')
    } else {
        movieList.classList.add('visible')
    }

    const filteredMovies = !filter ? movies: movies.filter(movie => movie.info.title.includes(filter))
    movieList.innerHTML = '';
    filteredMovies.forEach((movie) => {
        const movieEl = document.createElement('li')
        const { info } = movie; 
        let text = movie.getFormattedTitle() + ' - '
        for (const key in info) {
            if (key !== 'title') {
                text = text + `${key}: ${info[key]}`
            }
        }
        movieEl.textContent = text;
        movieList.append(movieEl)
    })
} 

const addMovieHandler = () => {
    const title = document.getElementById('title').value;
    const extraName = document.getElementById('extra-name').value;
    const extraValue = document.getElementById('extra-value').value;

    if (title.trim() === '' || extraName.trim() === '' || extraValue.trim() === '') {
        return
    }

    const newMovie = {
        info: {
            title,
            [extraName]: extraValue
            
        },
        id: Math.random() * Math.random() * 2 / Math.random(),
        
        getFormattedTitle: function() {
            return this.info.title.toUpperCase();
        }
    }

    movies.push(newMovie)
    renderMovies();
};

const searchMovieHandler = () => {
    const filterTerm = document.getElementById('filter-title').value;
    renderMovies(filterTerm);
}


addMovieBtn.addEventListener('click', addMovieHandler)
searchBtn.addEventListener('click', searchMovieHandler)





let theCaliforniaThunderBirds = {
    'teamName': 'The Thunder Birds',
    'members': ['Veer Rajput', 'Everett Favro', 'Riaan Shah', 'Jacob Teran', 'Rishi Anupuju', 'Andrew Francis', 'Dylan Hgnuh', 'Ronan Bells', 'Vyom Gaur', 'Jasraj Mann', 'Riva Rajput', 'Ishaan Shah', 'Shlok Shah'],
    'coach': 'Mr. Sandana',
    
}