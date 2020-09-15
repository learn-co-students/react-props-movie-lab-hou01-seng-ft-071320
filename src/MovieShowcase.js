// eslint-disable-next-line
import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    return (
      movieData.map(ele=>
            <MovieCard title={ele.title} IMDBRating={ele.IMDBRating} genres={ele.genres} poster={ele.poster} />
      )
    )
  }
  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
