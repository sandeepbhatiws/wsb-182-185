const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=";

const IMGPATH = "https://image.tmdb.org/t/p/w1280";

const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

var movies = [];

var page = 1;

async function fetchMovies(){

    var response = await fetch(APIURL+page);
    var data = await response.json();
    movies = data.results;

    displayMovies(movies);
}

function displayMovies(movies){
    const movieList = document.getElementById('movie-list');
    movieList.innerHTML = '';

    var movieData = '';

    movies.forEach((value, index) => {
        movieData += `<div class="movie-card">
                <img src="${ IMGPATH }${ value.poster_path }" alt="Movie Poster">
                <h3>${ value.original_title }</h3>
                <p>${ value.overview }</p>
            </div>`;
    });

    movieList.innerHTML = movieData;
}

function previous(){
    if(page > 1){
        page--;
        fetchMovies();
    }
}

function next(){
    page++;
    fetchMovies();
}

fetchMovies()