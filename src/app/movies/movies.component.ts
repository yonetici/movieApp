import { Component, OnInit } from '@angular/core';
import {Movie} from '../movie';
import {MovieService} from '../movie.service';

@Component({
  selector: 'movies', // .movies => <div class="movies", #movies => <div id="movies"
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor(private movieService: MovieService) { }

  title = 'Movie List';
  movies: Movie[];
  selectedMovie: Movie;

  onSelect(movie: Movie): void {
    this.selectedMovie = movie;
  }

  getMovies(): void {
    this.movieService.getMovies()
      .subscribe(movies => {
        this.movies = movies;
      });
  }

  getTitle() {
    return this.title;
  }

  ngOnInit(): void {
    this.getMovies();
  }

}
