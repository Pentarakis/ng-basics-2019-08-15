import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable, Subject, Subscription } from 'rxjs';
import { filter } from 'rxjs/internal/operators/filter';
import { pluck, switchMap, takeUntil } from 'rxjs/operators';
import { CharacterService } from '../character.service';
import { Character } from '../model/character';

@Component({
  selector: 'ngb-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit, OnDestroy {

  isCreateMode = true;
  character: Character = new Character();

  private destroy = new Subject<boolean>();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private characterService: CharacterService) {
  }

  ngOnInit() {
    this.route.params.pipe(
      pluck('id'),
      filter(id => id !== 'create'),
      switchMap((id: number) => this.characterService.read(Number(id))),
      takeUntil(this.destroy)
    )
      .subscribe(
        (character: Character) => {
          this.character = character;
          this.isCreateMode = false;
        }
      );
  }

  save(): void {
    let response$: Observable<Character>;
    if (this.isCreateMode) {
      response$ = this.characterService.create(this.character);
    } else {
      response$ = this.characterService.update(this.character);
    }
    response$
      .pipe(takeUntil(this.destroy))
      .subscribe(data => {
        console.log(data);
        this.router.navigate(['../'], {
          relativeTo: this.route
        });
      });
    this.character = new Character();
  }

  ngOnDestroy(): void {
    this.destroy.next(true);
    this.destroy.complete();
  }

}
