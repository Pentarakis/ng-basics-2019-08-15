import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from '../character.service';
import { Character } from '../model/character';

@Component({
  selector: 'ngb-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  character: Character;

  constructor(private route: ActivatedRoute, private characterService: CharacterService) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.characterService.read(Number(id)).subscribe(
      (character: Character) => this.character = character
    );
  }

  save(): void {
    // this.characterSaved.emit(this.character);
    this.character = new Character();
  }

}
