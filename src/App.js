const api_url = 'https://yts.mx/api/v2/list_movies.json?quality=3D';

// Defining my variable for the index.html
var container = document.querySelector('.container');
var container2 = document.querySelector('.container2');
var movieImage = document.querySelector('.movie-image');
var movieTitle = document.querySelector('.movie-title');
var movieYear  = document.querySelector('.movie-year');



const movieApp = async () => {
    try{
       const req = await fetch(api_url);
       const res = await req.json();
       return res;
    }
    catch(e){
        console.log('Error 404')
    }
       
}


const renderMovieApp = async ()=>{
    try{
        const movies = await movieApp();
        var html = ' ';

        movies.data.movies.slice(0,16).map(movie => {
            movieRating = Number.isInteger(movie.rating) ? movie.rating + '.0'  : movie.rating;
    
            
            let moviesList = ` <div class="movie-container">
            <div class="movie-items">
                <a href='./test2.html?movie=${movie.slug}'><img src='${movie.large_cover_image}' alt="images/${movie.title}" class="movie-image"/></a>
            </div>
            <div class="movie-description">
                <p ><a href="./test2.html?movie=${movie.slug}" class="movie-title" >${movie.title}</a></p>
                <p class="movie-year">${movie.year}</p>
                </div>
           
            </div>
        </div>`;
        html += moviesList;
        });
     container.innerHTML = html;

    }
    catch(error){
        console.log(error);
    }

}
renderMovieApp();

  // <button class="movie-rating" >${movieRating}</button>
 // <div class='year-rating-container'></div>