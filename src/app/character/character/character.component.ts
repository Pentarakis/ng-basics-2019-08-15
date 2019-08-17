import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from '../model/character';

@Component({
  selector: 'ngb-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  @Input()
  character: Character = new Character();

  @Output()
  characterSaved: EventEmitter<Character> = new EventEmitter();

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    console.log('ID: ' + id);
  }

  save(): void {
    this.characterSaved.emit(this.character);
    this.character = new Character();
  }

}
