import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {LayoutState, PanelState} from '../../models/layout-state.inteface';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  get activeVitaeTab(): string {
    return this.activeVitaeTabSrc;
  }

  set activeVitaeTab(value: string) {
    this.activeVitaeTabSrc = value;
  }

  private initialState: LayoutState = {
    sidePanelWidth: 20,
    sidePanelHeight: 100,
    contentPanelWidth: 80,
    contentPanelHeight: 100,
    contentNavigationHeight: 0,
    bottomPanelHeight: 0
  };
  private initialSideState: PanelState = {
    projects: true,
    blog: false,
    favorites: false
  };

  private layoutState = new BehaviorSubject<LayoutState>(this.initialState);
  private sidePanelState = new BehaviorSubject<PanelState>(this.initialSideState);
  private numberSelected = new BehaviorSubject<number>(1);
  private activeVitaeTabSrc: string;

  constructor() {
  }

  public updateLayoutState(state: LayoutState): void {
    this.layoutState.next(state);
  }

  public getLayoutState(): Observable<LayoutState> {
    return this.layoutState.asObservable();
  }

  public updateSidePanelState(state: PanelState): void {
    this.sidePanelState.next(state);
  }

  public getSidePanelState(): Observable<PanelState> {
    return this.sidePanelState.asObservable();
  }

  public updateNumberSelected(panelState: PanelState): void {
    const keys = Object.keys(panelState);
    const selected: number = keys.filter(key => panelState[key] === true).length;
    if (selected === 0) {
      this.layoutState.getValue().contentPanelWidth = 99;
      this.layoutState.getValue().sidePanelWidth = 1;
    } else {
      this.layoutState.getValue().contentPanelWidth = 80;
      this.layoutState.getValue().sidePanelWidth = 20;
    }
    this.numberSelected.next(selected);
  }

  public getNumberSelected(): Observable<number> {
    return this.numberSelected.asObservable();
  }
}
