import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Character } from './model/character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  readonly baseUrl = 'https://www.anapioficeandfire.com/api/characters';

  // https://www.anapioficeandfire.com/api/characters?pageSize=20

  constructor(private httpClient: HttpClient) {
  }

  read(id: number): Observable<Character> {
    return this.httpClient.get<Character>(`${this.baseUrl}/${id}`);
  }

  readAll(): Observable<Character[]> {
    return this.httpClient
      .get<Character[]>(`${this.baseUrl}?pageSize=20`)
      .pipe(
        map((characters: Character[]) => {
          return characters.map(
            (character: Character) => {
              character.id = this.getId(character.url);
              return character;
            }
          );
        })
      );
  }

  private getId(url: string): number {
    const parts = url.split('/');
    if (parts.length > 0) {
      return Number(parts[parts.length - 1]);
    }
    return 0;
  }
}
