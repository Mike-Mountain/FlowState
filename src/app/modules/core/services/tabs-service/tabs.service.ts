import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Tab} from '../../models/tab.interface';

@Injectable({
  providedIn: 'root'
})
export class TabsService {

  get activeTab(): Tab {
    return this.activeTabSrc;
  }

  set activeTab(value: Tab) {
    this.activeTabSrc = value;
  }

  private tabsList = new BehaviorSubject<Tab[]>([]);
  private activeTabSrc: Tab;

  constructor() {
  }

  addTab(tab: Tab) {
    const tabs = this.tabsList.getValue();
    tabs.push(tab);
    this.tabsList.next(tabs);
  }

  removeTab(tab: Tab): Tab[] {
    let tabs = this.tabsList.getValue();
    tabs = tabs.filter(item => item !== tab);
    this.tabsList.next(tabs);
    return tabs;
  }

  getTabsList(): Observable<Tab[]> {
    return this.tabsList.asObservable();
  }
}
