import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = (movieData) => {
    // map over your movieData array and return an array of the correct JSX
    
  return movieData.map((item, index) => 
       <MovieCard title={item.title} IMDBRating={item.IMDBRating} genres={item.genres} poster={item.poster} key={index}/>
    )
  }

  render() {
    
    return (
      <div id="movie-showcase">
        {this.generateMovieCards(movieData)}
      </div>
    )
  }
}
