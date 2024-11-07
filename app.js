

const apiUrl = 'https://api.themoviedb.org/3/trending/movie/day?api_key=2219857c5dd250c16e7588afbb6250dc';

fetch(apiUrl).then(response => {
    // Check if the response is successful
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    // Parse the response as JSON
    return response.json();
}).then(data => {
    // Handle the JSON data here
    // console.log(data); // For debugging
    data.results.map( movie_list =>{
        console.log(movie_list)
        const movie_data = document.getElementById("movie-list")
        movie_data.innerHTML += `<div class="col-md-4 col-sm-6 col-lg-3 col-xl-2"><img src="https://image.tmdb.org/t/p/original/${movie_list.poster_path}">  
            <a 
            href="/watch.html?id=${movie_list.id}"
            data-bs-theme="dark"
            > 
            ${movie_list.title}
            </a>
        </div> 
        `;
    } )


})
.catch(error => {
    // Handle any errors that occurred during fetch
    console.error('Error fetching data:', error);
});
