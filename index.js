const KEY = "74a8deec";
const URL = "http://www.omdbapi.com/";

const searchInput = document.getElementById("search");
const searchForm = document.getElementById("search-form");
const searchBtn = document.getElementById("search-btn");

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  fetchMovieResults();
  searchInput.value = ""
});

async function fetchMovieResults() {
  const title = searchInput.value;
  const response = await fetch(`${URL}?apikey=${KEY}&s=${title}`);
  const data = await response.json();
  console.log(data);
}