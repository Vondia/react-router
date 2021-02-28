import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./MoviePage.scss";

export default function MoviePage() {
  const { imdb_id } = useParams();
  console.log(imdb_id);

  const [movieData, setMovieData] = useState();

  console.log("render");

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `https://omdbapi.com/?apikey=42919006&i=${imdb_id}`
      );
      setMovieData(response.data);
      console.log("data", response.data);
    }
    fetchData();
  }, [imdb_id]);

  return (
    <div>
      {movieData && (
        <div>
          {movieData.Title}, {movieData.Year}{" "}
          <img
            src={movieData.Poster}
            alt="poster"
            style={{
              display: "block",
              maxWidth: "100%",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
          <h3>Actors: </h3>
          <p>{movieData.Actors}</p>
          <h3>Movie Plot: </h3>
          <p> {movieData.Plot}</p>
        </div>
      )}
    </div>
  );
}
