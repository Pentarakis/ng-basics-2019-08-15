import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from '../model/character';

@Component({
  selector: 'ngb-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {

  characters: Character[] = [
    { id: 1, name: 'Daenerys Targaryen', culture: 'Valyrian'},
    { id: 2, name: 'Jon Snow', culture: 'Northmen'}
  ];

  chosenCharacter: Character = new Character();

  displayedColumns: string[] = ['id', 'name', 'culture'];

  constructor(private router: Router, private route: ActivatedRoute) { }

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

  showDetails(character: Character) {
    this.router.navigate([`./${character.id}`], {
      relativeTo: this.route
    });
  }

  createCharacter(character: Character) {
    this.router.navigate(['./create'], {
      relativeTo: this.route
    });
  }
}
