import { Component, OnInit } from '@angular/core';
import { Character } from '../model/character';

@Component({
  selector: 'ngb-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'culture'];

  characters: Character[] = [
    { id: 1, name: 'Daenerys Targaryen', culture: 'Valyrian'},
    { id: 2, name: 'Jon Snow', culture: 'Northmen'}
  ];

  chosenCharacter: Character = new Character();

  constructor() { }

  ngOnInit() {
  }

  save(character: Character): void {
    if (!character.id) {
      this.createCharacter(character);
    } else {
      this.updateCharacter(character);
    }
  }

  private updateCharacter(character: Character): void {
    const index = character.id - 1;
    this.characters[index] = character;
  }

  private createCharacter(character: Character): void {
    character.id = this.characters[this.characters.length - 1].id + 1;
    this.characters.push(character);
  }

}
