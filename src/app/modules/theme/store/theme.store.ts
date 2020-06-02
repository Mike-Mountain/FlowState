import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Theme } from './theme.model';

export interface ThemeState extends EntityState<Theme> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'theme' })
export class ThemeStore extends EntityStore<ThemeState> {

  constructor() {
    super();
  }

}
