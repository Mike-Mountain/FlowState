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

  updateTheme(color: { color, colorValues }, variableName: string, propertyName: string) {
    this.theme[propertyName] = color.color;
    this.dom.documentElement.style.setProperty(variableName, color.color);
    this.dom.documentElement.style.setProperty(`${variableName}Values`, color.colorValues);
  }

  applyTheme(color: string, propertyName: string) {
    this.dom.documentElement.style.setProperty(propertyName, color);
  }

  saveTheme() {
    this.themeService.add<Theme>(this.theme).subscribe();
  }

}
