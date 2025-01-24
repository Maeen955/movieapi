let input = document.getElementById("input");
const searchBtn = document.getElementById("searchBtn")
const movieContainer = document.getElementById("movie-container")
const icon = document.getElementById("icon");
const items = document.getElementById("items");
let isIconShow = false;
icon.addEventListener("click", ()=> {
  isIconShow = !isIconShow;
  if(!isIconShow){
    items.style.left = "-200px";
    icon.innerHTML = `<i class="fa-solid fa-bars"></i>`


  }else{
    items.style.left = "0px";
    icon.innerHTML = `<i class="fa-solid fa-xmark"></i>`

  }

})



let key = "b4dccfb0"

let movieDataArr = [];
let endingIndex = 12;
let startingIndex = 0;


searchBtn.addEventListener("click", ()=>{
  movieContainer.innerHTML = "";
   const searchTerm = input.value;
  
     let url = `http://www.omdbapi.com/?s=${searchTerm}&apikey=${key}`;
     fetch(url).
     then((res) => res.json()).
     then((data) => {
       movieDataArr = data.Search
          console.log(movieDataArr[1].Title);
          displayMovies(movieDataArr)
          
     })
     input.value = "";
     
   }
)



const displayMovies = (movies) => {
       
 
    movies.forEach((movie) => {

      movieContainer.innerHTML += `<div id="movie-card">
      <img id="movie-img" src="${movie.Poster}">
      <p id="movie-name">${movie.Title.length > 30 ? movie.Title.slice(0,30)+"....." : movie.Title}</p>
      <p id="year">YEAR: ${movie.Year}</p>
      <p id="imd">ID: ${movie.imdbID}</p>
      </div>`
    })
    
  }

  
  


