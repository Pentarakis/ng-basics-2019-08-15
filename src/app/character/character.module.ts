import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatTableModule } from '@angular/material';

import { CharacterRoutingModule } from './character-routing.module';
import { CharacterComponent } from './character/character.component';
import { CharacterListComponent } from './character-list/character-list.component';


@NgModule({
  declarations: [CharacterComponent, CharacterListComponent],
  exports: [CharacterComponent, CharacterListComponent],
  imports: [
    CommonModule,
    CharacterRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule
  ]
})
export class CharacterModule { }
