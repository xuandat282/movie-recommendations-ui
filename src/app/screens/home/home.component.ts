import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {AppService} from "../../services/app.service";
import {environment} from "../../../environments/environment";
import {Movie} from "../../models/movie";
import { Recommendation } from 'src/app/models/recommendMovie';
import {DefaultImage} from "../../shared/defaultConstants";
import { CFRecommendation } from 'src/app/models/cf-recommend';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  limit: number = 10;
  movies?: Movie[];
  pageRankRecommendations?: CFRecommendation[];
  collaborativeRecommendationsByUser?: CFRecommendation[];
  collaborativeRecommendationsByMoive?: CFRecommendation[];
  userId: string = "user279";
  movieId: string = "59315";
  defaultImage = new DefaultImage().defaultImage;
  invalidImage = new DefaultImage().invalidImage;
  algorithms = ["PageRank", "Collaborative Filtering"]

  constructor(private appService: AppService, private http: HttpClient) { }

  ngOnInit(): void {
    this.getCollaborativeRecommendationsByUser(this.userId);
    this.getCollaborativeRecommendationsByMoive(this.movieId);
    this.getPageRankRecommendations(this.movieId);
  }

  getProducts(): void {
    this.appService.getProducts().subscribe(movies => {
      this.movies = movies;
    });
  }

  getPageRankRecommendations(movieId: string): void {
    this.appService.getPageRankRecommendations(movieId, 10).subscribe(movies => {
      this.pageRankRecommendations = movies;
      console.log(movies);
    });
  }

  getCollaborativeRecommendationsByUser(userId: string): void {
    this.appService.getCollaborativeRecommendationsByUser(userId, 10).subscribe(movies => {
      this.collaborativeRecommendationsByUser = movies;
      console.log(movies);
    });
  }

  getCollaborativeRecommendationsByMoive(userId: string): void {
    this.appService.getCollaborativeRecommendationsByMovie(userId, 10).subscribe(movies => {
      this.collaborativeRecommendationsByMoive = movies;
      console.log(movies);
    });
  }
}
