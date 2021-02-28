import { useState } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard";

export default function DiscoverMoviesPage() {
  const [searchText, set_searchText] = useState("");

  const [searchState, setSearchState] = useState("idle");

  const [movieState, setMovieState] = useState([]);

  const search = async () => {
    console.log("Start searching for:", searchText);
    setSearchState("searching");
    // Best practice: encode the string so that special characters
    //  like '&' and '?' don't accidentally mess up the URL
    const queryParam = encodeURIComponent(searchText);

    // Option B: use the `axios` library like we did on Tuesday
    const response = await axios.get(
      `https://omdbapi.com/?apikey=42919006&s=${queryParam}`
    );

    setSearchState("done");
    console.log("Success!", response);
    setMovieState(response.data.Search);
  };

  return (
    <div>
      <h1>Discover some movies!</h1>
      <p>
        {searchState}
        <input
          value={searchText}
          onChange={(e) => set_searchText(e.target.value)}
        />
        <button onClick={search}>Search</button>
      </p>
      <div>
        {movieState.map((movie, index) => (
          <MovieCard
            key={index}
            Id={movie.imdbID}
            Name={movie.Title}
            Image={movie.Poster}
          />
        ))}
      </div>
    </div>
  );
}
