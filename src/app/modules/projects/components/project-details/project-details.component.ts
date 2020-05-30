import {Component, OnInit} from '@angular/core';
import {ProjectsQuery} from '../../store/projects.query';
import {ProjectsService} from '../../store/projects.service';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {Project} from '../../store/project.model';
import {TabsService} from '../../../core/services/tabs-service/tabs.service';
import {Tab} from '../../../core/models/tab.interface';
import {LayoutService} from '../../../core/services/layout-service/layout.service';
import {LayoutState} from '../../../core/models/layout-state.inteface';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {

  paramSubscription: Subscription;
  layoutSubscription: Subscription;
  activeProject: Project;
  layout: LayoutState;

  constructor(public projectsQuery: ProjectsQuery,
              public projectsService: ProjectsService,
              private layoutService: LayoutService,
              private tabsService: TabsService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.paramSubscription = this.route.params.subscribe(params => {
      if (this.projectsQuery.getEntity(params.projectId)) {
        this.activeProject = this.projectsQuery.getEntity(params.projectId);
        if (!this.tabsService.activeTab) {
          this.setDefaultTab();
        }
      } else {
        this.projectsService.get<Project>(params.projectId).subscribe(project => {
          this.activeProject = project;
          if (!this.tabsService.activeTab) {
            this.setDefaultTab();
          }
        });
      }
    });

    this.layoutSubscription = this.layoutService.getLayoutState().subscribe(state => this.layout = state);
  }

  private setDefaultTab() {
    const tab: Tab = {
      label: this.activeProject.title,
      route: `/projects/details/${this.activeProject.id}`
    };
    this.tabsService.addTab(tab);
    this.tabsService.activeTab = tab;
    this.layoutService.updateLayoutState({
      ...this.layout,
      contentNavigationHeight: 100
    });
  }

}
