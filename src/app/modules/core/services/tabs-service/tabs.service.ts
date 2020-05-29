import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Tab} from '../../models/tab.interface';

@Injectable({
  providedIn: 'root'
})
export class TabsService {

  private tabsList = new BehaviorSubject<Tab[]>([]);

  constructor() {
  }

  addTab(tab: Tab) {
    const tabs = this.tabsList.getValue();
    tabs.push(tab);
    this.tabsList.next(tabs);
  }

  removeTab(tab: Tab) {
    let tabs = this.tabsList.getValue();
    tabs = tabs.filter(item => item !== tab);
    this.tabsList.next(tabs);
  }

  getTabsList(): Observable<Tab[]> {
    return this.tabsList.asObservable();
  }
}
