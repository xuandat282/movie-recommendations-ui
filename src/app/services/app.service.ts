import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Movie} from "../models/movie";
import { Recommendation } from '../models/recommendMovie';
import { CFRecommendation } from '../models/cf-recommend';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${environment.apiUrl}/api/top/movie/top-n/10`);
  }

  getPageRankRecommendations(movieId: string, n: number): Observable<CFRecommendation[]> {
    return this.http.get<CFRecommendation[]>(`${environment.apiUrl}/api/rec_engine/pagerank_collab/${movieId}/${n}`);
  }

  getCollaborativeRecommendationsByUser(userId: string, n: number): Observable<CFRecommendation[]> {
    return this.http.get<CFRecommendation[]>(`${environment.apiUrl}/api/rec_engine/cf_gds_knn_user/${userId}/${n}`);
  }

  getCollaborativeRecommendationsByMovie(userId: string, n: number): Observable<CFRecommendation[]> {
    return this.http.get<CFRecommendation[]>(`${environment.apiUrl}/api/rec_engine/cf_gds_knn_movie/${userId}/${n}`);
  }
}
