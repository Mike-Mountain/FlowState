import { Injectable } from '@angular/core';
import { NgEntityService } from '@datorama/akita-ng-entity-service';
import { ThemeStore, ThemeState } from './theme.store';

@Injectable({ providedIn: 'root' })
export class ThemeService extends NgEntityService<ThemeState> {

  constructor(protected store: ThemeStore) {
    super(store);
  }

}
