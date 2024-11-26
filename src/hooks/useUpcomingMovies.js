import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";

export default function useUpcomingMovies() {
  const dispatch = useDispatch();

  async function upcomingMovies() {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();
    // console.log(json.results);

    dispatch(addUpcomingMovies(json.results));
  }

  useEffect(() => {
    upcomingMovies();
  }, []);
}
