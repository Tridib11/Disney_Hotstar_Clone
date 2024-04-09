import React from 'react';

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function MovieCard({ movie }) {
  return (
    <div>
      <img src={IMAGE_BASE_URL + movie.poster_path} className='max-w-[110px] md:max-w-[250px] rounded-lg  hover:border-[3px] border-gray-400 hover:scale-110 transition-all duration-150 ease-in cursor-pointer' />
    </div>
  );
}

export default MovieCard;
