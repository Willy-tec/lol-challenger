import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ChampionInfo } from './ChampionInfo';
import { catchError, map, tap } from 'rxjs/operators';

import { Hero } from './Hero';
import { PathGeneratorService } from './path-generator.service';
import { Observable, of } from 'rxjs';
import { MessagingService } from './messaging.service';
@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(
    private http: HttpClient,
    private pathGen: PathGeneratorService,
    private messageService: MessagingService
  ) {}
  getFreeChampionList() {
    return this.http
      .get<ChampionInfo>(this.pathGen.getFreeChampionUrl())
      .pipe(
        catchError(
          this.handleError<ChampionInfo>(
            'getFreeChampionInfo',
            {} as ChampionInfo
          )
        )
      );
  }
  getChampion(id: string) {
    return this.http
      .get<Hero>(this.pathGen.getDetailChampionUrl(id))
      .pipe(catchError(this.handleError<Hero>('getHero')));
  }
  private log(message: string) {
    this.messageService.add(`[HeroService]: ${message}`);
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}

// TODO Gestion des erreurs
// TODO Input for API
