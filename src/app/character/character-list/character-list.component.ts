import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharacterService } from '../character.service';
import { Character } from '../model/character';

@Component({
  selector: 'ngb-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {

  characters: Character[];

  displayedColumns: string[] = ['id', 'name', 'culture'];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private characterService: CharacterService) {

    this.characterService.readAll().subscribe(
      (characters: Character[]) => {
        this.characters = characters;
      });
  }

  ngOnInit() {
  }

  showDetails(character: Character) {
    this.router.navigate([`./${character.id}`], {
      relativeTo: this.route
    });
  }

  createCharacter() {
    this.router.navigate(['./create'], {
      relativeTo: this.route
    });
  }
}
