const container2 = document.querySelector('.container2');
const click1 = document.querySelector('.movie-title');
const navBackward = document.querySelector('.back');


const url = 'https://yts.mx/api/v2/list_movies.json?quality=3D';

const movieApp2 = async ()=>{
    var response = await fetch(url);
    var dataCollected = await response.json();
    return dataCollected;
}

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const slug = urlParams.get('movie');


const renderMovieApp2 = async ()=>{
    var html = '';
    var moviesList = await movieApp2();
    console.log(moviesList);
    const pageData = moviesList.data.movies.filter(movie => movie.slug === slug);
    
   
    pageData.map(movie2 => {
      var reducedSynopsis = movie2.synopsis;
      reducedSynopsis = (reducedSynopsis.length > 410) ? reducedSynopsis.slice(0,410)+'...' : reducedSynopsis;
      
         var list = `
         <div class="movie-items2">
         <img src="${movie2.large_cover_image}" alt="images/${movie2.title}" class="movie-image2"/>
         </div>
         <div class="movie-description2">
         <h1 class="movie-title2">${movie2.title}</h1>
         <div class="movie-sub-group">
         <h3 class="movie-year2">${movie2.year}</h3>
         <p class="movie-sub-genre">${movie2.genres.join(' / ')}</p>
         </div>
         <p class="movie-item-p">
           ${reducedSynopsis};
         </p>
        </div>`
         html += list;
         console.log(html);
    });
    container2.innerHTML = html;
};
renderMovieApp2();


navBackward.addEventListener('click', ()=>{
  history.back();
})