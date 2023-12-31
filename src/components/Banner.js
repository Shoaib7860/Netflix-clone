import React, { useEffect, useState } from 'react'
import './banner.css'
import axios from 'axios';
import requests from './Request';

function Banner() {

  const [movie, setMovie]= useState([]);

  useEffect(() => {
    axios.get(
      requests.fetchNetflixOriginals
       )
       .then((res) => {
         setMovie(res.data.results[
          Math.floor(Math.random() * res.data.results.length - 1)
        ])
       });
   }, []);

   console.log(movie)



  function truncatte(string,n){
    return string?.length > n ? string.substr(0, n - 1) + '...' : string;

  };
  return (
    <header className='banner' style={{
    
      backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path
    }")`,
      
    }}>
      <div className='banner_contents'>
        <h1 className='banner_title'>
          {movie?.title || movie?.name || movie?.original_name }
        </h1>
        <div className='banner_buttons'>
          <button className='banner_button'>Play</button>
          <button className='banner_button'>My List</button>

        </div>
        <h1 className='banner__description'>
          {truncatte(movie?.overview,150)}

        </h1>
      
      </div>
      <div className='banner--fadeBottom' />

      


    </header>
  )
}

export default Banner