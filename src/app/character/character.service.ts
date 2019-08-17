import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Character } from './model/character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  readonly baseUrl = 'http://localhost:3000/characters';

  constructor(private httpClient: HttpClient) {
  }

  read(id: number): Observable<Character> {
    return this.httpClient.get<Character>(`${this.baseUrl}/${id}`);
  }

  readAll(): Observable<Character[]> {
    return this.httpClient
      .get<Character[]>(`${this.baseUrl}?pageSize=20`);
  }

  update(character: Character): Observable<Character> {
    return this.httpClient.put<Character>(`${this.baseUrl}/${character.id}`, character);
  }

  create(character: Character): Observable<Character> {
    return this.httpClient.post<Character>(this.baseUrl, character);
  }
}
