import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    return movieData.map((data)=>{
      render(data) {
        return (
          <div id="movie-showcase">
          {this.generateMovieCards()}
          </div>
        )
      }

    }
    // map over your movieData array and return the correct
  }

}
