import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectGenresData } from "../redux/reducer/anime/genresAnimeSlice";
import { AppDispatch } from "../redux/store/store";
import { fetchGenres } from "../redux/reducer/anime/reducer";

export const Genres = () => {
  const genres = useSelector(selectGenresData);
  const dispatch: AppDispatch = useDispatch();
  console.log(genres);
  useEffect(() => {
    dispatch(fetchGenres());
  }, [dispatch]);
  return (
    <label htmlFor="genres" className=" text-black ">
      <select
        name="genres"
        id="genres"
        className="border border-blue-400 rounded-lg p-1 cursor-pointer font-medium "
      >
        <option value="">Genre</option>
        {genres.map((genre) => (
          <option key={genre.id} value={genre.id}>
            {genre.name}
          </option>
        ))}
      </select>
    </label>
  );
};
