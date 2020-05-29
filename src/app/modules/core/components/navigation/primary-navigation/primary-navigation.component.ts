import {Component, OnInit} from '@angular/core';
import {ProjectsQuery} from '../../../../projects/store/projects.query';

@Component({
  selector: 'app-primary-navigation',
  templateUrl: './primary-navigation.component.html',
  styleUrls: ['./primary-navigation.component.scss']
})
export class PrimaryNavigationComponent implements OnInit {

  dropdownIsActive: boolean;
  selectedProject: string;

  constructor(public projectsQuery: ProjectsQuery) {
  }

  ngOnInit(): void {
  }

}
