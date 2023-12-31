import React, { useEffect, useState } from 'react'
import "./row.css"
import axios from 'axios'

function Row( { title, fetchURL, isLargeRow = false }) {

    const [movies, setMovies]= useState([]);

    const base_Url = "https://image.tmdb.org/t/p/original/";


    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchURL);
            setMovies(request.data.results);
            return request;
        }

        fetchData();


    }, [fetchURL])

    console.log(movies)

    

    
  return (
    <div className='row'>
        <h2>{title}</h2>
        <div className='row__posters'>
        {movies.map((movie) => (
          <img
          className={`row__poster ${isLargeRow && "row__posterLarge"}`}
          key={movie.id}
          src={`${base_Url}${movie.backdrop_path
          }`} alt={movie.title}  />
        ))}

        </div>
      
    </div>
  );
      }

export default Row