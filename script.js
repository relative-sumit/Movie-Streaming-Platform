let movieList = [
  {
    Name: "Total Recall",
    poster:
      "https://mir-s3-cdn-cf.behance.net/project_modules/hd/8f3390104538527.5f64ee3eb3a0e.jpg",
    rating: 7.1,
  },
  {
    Name: "Kanguva",
    poster:
      "https://kanguva.com/kanguva-movie-posters-images-wallpapers/kanguva-new-poster-surya-with-sword-on-riding-horse/",
    rating: 6.7,
  },
  {
    Name: "The Batman",
    poster:
      "https://www.bhmpics.com/downloads/movie-poster-background-4k-Wallpapers/9.wp8872777.jpg",
    rating: 8.2,
  },
  {
    Name: "Avengers Endgame",
    poster: "https://wallpapercave.com/wp/wp4770368.jpg",
    rating: 8.1,
  },
  {
    Name: "Leo",
    poster:
      "https://wallpaperbuzz.net/wp-content/uploads/2023/02/HD-wallpaper-ps-thalapathy-leo-poster-vijay-actor.jpg",
    rating: 7.5,
  },
  {
    Name: "Salaar",
    poster:
      "https://tigereditingzone.in/wp-content/uploads/2023/12/Salaar-Movie-Poster-Background-Image-HD-4K-jpg.webp",
    rating: 7.7,
  },
  {
    Name: "Mission Impossible - Dead Reckoning",
    poster: "https://pbs.twimg.com/media/FwVJKEuaIAADl_z.jpg:large",
    rating: 7.9,
  },
  {
    Name: "Godzilla",
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSefrREztYRF7sIGAfam8FfepdLnWHbmqP3Jg&usqp=CAU",
    rating: 7.8,
  },
  {
    Name: "Race 3",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMzQ4ZTc5ZTItYWRhNi00YTJjLWI4NGMtNjA0ODQ1ZDQxNzkyXkEyXkFqcGdeQXVyNjc4NjAxMzM@._V1_.jpg",
    rating: 3,
  },
  {
    Name: "Ludo",
    poster:
      "https://m.media-amazon.com/images/M/MV5BOTQwOTVlMzctM2I3MS00YzllLWJiNTctYzdhMjkzMzhhY2RkXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
    rating: 8.4,
  },
  {
    Name: "Zombieland",
    poster:
      "https://www.tallengestore.com/cdn/shop/products/Zombieland_Double_Tap_-_Woody_Harrelson_Emma_Stone_-_Hollywood_Action_Movie_Poster_be495836-b95b-4414-ac70-52faceba0ca3.jpg?v=1583300573",
    rating: 7.1,
  },
  {
    Name: "Fast x",
    poster:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/aa454069-1f38-4db1-a9e3-75d6b00c42e8/dfys5s9-96c68a4a-5d6a-4fe2-8815-9db1d2f4c151.jpg/v1/fill/w_1280,h_1829,q_75,strp/fast_x_poster_by_akithefull_dfys5s9-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTgyOSIsInBhdGgiOiJcL2ZcL2FhNDU0MDY5LTFmMzgtNGRiMS1hOWUzLTc1ZDZiMDBjNDJlOFwvZGZ5czVzOS05NmM2OGE0YS01ZDZhLTRmZTItODgxNS05ZGIxZDJmNGMxNTEuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.LQfa9utoB2HvRurkB7bglXC8MQKWHJvSkaeATF6r9mU",
    rating: 6.2,
  },
  {
    Name: "Dunki",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMzQ0NDRhNmItYzllYS00NDdlLTk0YTctZDQ5YmFkYjdkNDcyXkEyXkFqcGdeQXVyNTYwMzA0MTM@._V1_.jpg",
    rating: 6.9,
  },
  {
    Name: "Piku",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTUwOTMxNjc2OV5BMl5BanBnXkFtZTgwODQ4OTMxNTE@._V1_.jpg",
    rating: 7.7,
  },
  {
    Name: "Jurassic Park",
    poster:
      "https://mir-s3-cdn-cf.behance.net/project_modules/hd/f00bf346385235.58520f9022451.jpg",
    rating: 8.1,
  },
];

function searchMovie() {
  let movieName = document.getElementById("searchBox").value;

  if (movieName !== "") {
    let result = movieList.filter(function (movie) {
      return movie.Name.toUpperCase().includes(movieName.toUpperCase());
    });
    display(result);
  } else display(movieList);
}

// let movieDiv = document.createElement("div");
// movieDiv.classList.add("movie");

// let moviesDiv = document.createElement("div");
// moviesDiv.classList.add("movies");

// movieDiv.appendChild(moviesDiv);

// console.log(movieDiv);

function display(data) {
  document.getElementById("movies").innerHTML = "";
  let htmlString = ``;

  for (let index = 0; index < data.length; index++) {
    htmlString =
      htmlString +
      `
    <div class="movie">
        <div class="overlay">
          <div class="video"></div>
          <div class="details">
            <h2>${data[index].Name}</h2>
            <h3>IMDB: ${data[index].rating}</h3>
            <p>lorem ipsum gone to</p>
          </div>
        </div>
        <img class="poster" src=${data[index].poster} alt=${data[index].Name}>
      </div>
    `;
  }

  document.getElementById("movies").innerHTML = htmlString;
}

display(movieList);
