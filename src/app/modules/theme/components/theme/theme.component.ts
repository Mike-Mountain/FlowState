import {Component, Inject, OnInit} from '@angular/core';
import {createTheme, Theme} from '../../store/theme.model';
import {ThemeQuery} from '../../store/theme.query';
import {ThemeService} from '../../store/theme.service';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent implements OnInit {

  public theme: Theme;

  constructor(public themeQuery: ThemeQuery,
              private themeService: ThemeService,
              @Inject(DOCUMENT) private dom: Document) {
  }

  ngOnInit(): void {
    this.theme = createTheme({});
  }

  updateTheme(color: string) {
    this.dom.documentElement.style.setProperty('--page-bg', color);
  }

  saveTheme() {
    this.themeService.add<Theme>(this.theme).subscribe();
  }

}
