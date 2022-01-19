const movieList = [
  {
    id: 1641812427583,
    name: "The Matrix",
    year: 1998,
    rating: "3",
    genre: "Scifi, Thriller",
    image: {
      url: "https://i.pravatar.cc/300",
      altInfo: "Matrix DVD cover",
    },
  },
];

function makeStars(count) {
  let stars = "";
  for (let i = 0; i < count; i++) {
    stars = stars + "⭐️";
  }
  return stars;
}

function makeMovieListHTML(movies) {
  const listDiv = document.querySelector("#movie-list");
  // clearing old values
  listDiv.innerHTML = "";

  for (const movie of movies) {
    /*
    <div class="item" id="12344">
      <img src="https://i.pravatar.cc/300" alt="Ironman 2008 DVD cover">
      <h4>Ironman</h4>
      <p>2008</p>
      <p>⭐️⭐️⭐️⭐️</p>
      <p>Fantasy</p>
    </div>
    */
    const div = document.createElement("div");
    div.setAttribute("id", movie.id);
    div.classList.add("item");

    const img = document.createElement("img");
    img.setAttribute("src", movie.image.url);
    img.setAttribute("alt", movie.image.altInfo);
    div.appendChild(img);

    const h4 = document.createElement("h4");
    h4.textContent = movie.name;
    div.appendChild(h4);

    const pYear = document.createElement("p");
    pYear.textContent = movie.year;
    div.appendChild(pYear);

    const pRating = document.createElement("p");
    pRating.textContent = makeStars(movie.rating);
    div.appendChild(pRating);

    const pGenre = document.createElement("p");
    pGenre.textContent = movie.genre;
    div.appendChild(pGenre);

    listDiv.appendChild(div);
  }
}

// --- start
makeMovieListHTML(movieList);
