import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from './model/character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  readonly baseUrl = 'https://www.anapioficeandfire.com/api/characters';

  // https://www.anapioficeandfire.com/api/characters?pageSize=20

  constructor(private httpClient: HttpClient) { }

  read(id: number): Observable<Character> {
    return this.httpClient.get<Character>(`${this.baseUrl}/${id}`);
  }

  readAll(): Observable<Character[]> {
    return this.httpClient.get<Character[]>(`${this.baseUrl}?pageSize=20`);
  }
}
