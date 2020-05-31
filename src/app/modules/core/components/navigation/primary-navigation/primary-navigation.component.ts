import {Component, OnInit} from '@angular/core';
import {ProjectsQuery} from '../../../../projects/store/projects.query';
import {Project} from '../../../../projects/store/project.model';

@Component({
  selector: 'app-primary-navigation',
  templateUrl: './primary-navigation.component.html',
  styleUrls: ['./primary-navigation.component.scss']
})
export class PrimaryNavigationComponent implements OnInit {

  dropdownIsActive: boolean;
  selectedProject: Project;
  searchText: string;
  isSearching: boolean;

  constructor(public projectsQuery: ProjectsQuery) {
  }

  ngOnInit(): void {
  }

  search(searchText: string) {
  }
}
