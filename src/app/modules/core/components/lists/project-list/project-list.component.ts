import { Component, OnInit } from '@angular/core';
import {ProjectsService} from '../../../../projects/store/projects.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  constructor(private projectsService: ProjectsService,
              ) { }

  ngOnInit(): void {
  }

}
