const addMovieModal = document.getElementById('add-modal');
const startAddMovieButton = document.querySelector('header button');
const backdrop = document.getElementById('backdrop')
const cancelAddMovieButton = document.getElementById('cancelcancel')
const comfirmAddMovieButton = cancelAddMovieButton.nextElementSibling
const userInputs = addMovieModal.querySelectorAll('input')
const entryTextSection = document.getElementById('entry-text')
const deleteModal = document.getElementById('delete-modal')
const listRoot =  document.getElementById('movie-list')
const movies = [];

const updateUI = () => {
    if (movies.length === 0) {
        entryTextSection.style.display = 'block'
    } else {
        entryTextSection.style.display = 'none'
    }
}

const deleteMovie = movieId => {
    let ii = 0;
    for (const movie of movies) {
        if (movie.id === movieId) {
            break;
        }
        ii++;
    }
    movies.splice(ii, 1);
    updateUI()
    const listRoot =  document.getElementById('movie-list')
    if (listRoot.children[ii] == undefined) {
        return
    } else {
        console.log(listRoot[ii])
        listRoot.removeChild(listRoot.children[ii])
    }
}

function d3404(movieId) {
    deleteMovie(movieId)
    closeDeleteModal();
}

const deleteMovieHandler = movieId => {
    function d3403() {
        d3404(movieId)
    }
    deleteModal.classList.add('visible');
    toggleBackdrop()
    const cancel = deleteModal.querySelector('.btn--passive')
    let confirm = deleteModal.querySelector('.btn--danger')
    confirm.replaceWith(confirm.cloneNode(true))
    confirm = deleteModal.querySelector('.btn--danger')
    cancel.removeEventListener('click', closeDeleteModal)
    cancel.addEventListener('click', closeDeleteModal)
    confirm.addEventListener('click', d3403) 
}

const renderNewMovieElement = (id, title, imageUrl, rating) => {
    const newMovieElement = document.createElement('li')
    newMovieElement.className = 'movie-element'
    const listRoot =  document.getElementById('movie-list')
    newMovieElement.innerHTML = `
    <div class='movie-element__image'>
        <img src='${imageUrl}' alt='${title}'>
    </div>
    <div class='movie-element__info'>
        <h2>${title}</h2>
        <p>${rating}/5 stars</p>
    </div>
    `
    newMovieElement.addEventListener('click', deleteMovieHandler.bind(null, id))
    listRoot.append(newMovieElement);
    console.log(listRoot)
}


const clearMovieInput = () => {
    for (const usrInput of userInputs) {
        usrInput.value = '';
    }
}

const closeMovieModal = () => {
    addMovieModal.classList.remove('visible');
    backdrop.classList.remove('visible')
}

const closeDeleteModal = () => {
    console.log(listRoot)
    deleteModal.classList.remove('visible');
    backdrop.classList.remove('visible')
}

function toggleBackdrop() {
    backdrop.classList.add('visible')
    console.log(backdrop.className)
}

const toggleMovieModal = () => {
    addMovieModal.classList.add('visible');
    toggleBackdrop();
};


const backdropClickHandler = () => {
    closeMovieModal();
    closeDeleteModal()
    clearMovieInput()
}

const cancelClickHandler = () => {
    closeMovieModal();
    clearMovieInput()
}

const addMovieHandler = () => {
    const titleValue = userInputs[0].value;
    const imageUrlValue = userInputs[1].value;
    const ratingValue = userInputs[2].value;

    if (titleValue.trim() === '' || imageUrlValue.trim() === '' || ratingValue.trim() === '') {
        alert('Invalid Input')
        return;
    }
    
    const newMovie = {
        id: (Math.random() + Math.random),
        title: titleValue,
        image: imageUrlValue,
        rating: ratingValue
    }

    movies.push(newMovie);
    console.log(movies);
    closeMovieModal()
    updateUI()
    renderNewMovieElement(newMovie.id, newMovie.title, newMovie.image, newMovie.rating);
    clearMovieInput()
}

startAddMovieButton.addEventListener('click', toggleMovieModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelAddMovieButton.addEventListener('click', cancelClickHandler);
comfirmAddMovieButton.addEventListener('click', addMovieHandler);
