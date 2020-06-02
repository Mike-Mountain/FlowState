import {Component, Input, OnInit} from '@angular/core';
import {ProjectsService} from '../../../../projects/store/projects.service';
import {ProjectsQuery} from '../../../../projects/store/projects.query';
import {createProject, Project} from '../../../../projects/store/project.model';
import {TabsService} from '../../../services/tabs-service/tabs.service';
import {Tab} from '../../../models/tab.interface';
import {Router} from '@angular/router';
import {LayoutService} from '../../../services/layout-service/layout.service';
import {LayoutState} from '../../../models/layout-state.inteface';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  @Input() layoutState: LayoutState;

  public projects: Project[] = [];
  public tabs: Tab[];
  private tabsSubscription: Subscription;

  constructor(public tabsService: TabsService,
              private layoutService: LayoutService,
              private projectsService: ProjectsService,
              private projectsQuery: ProjectsQuery,
              private router: Router) {
  }

  ngOnInit(): void {
    if (this.projectsQuery.getAll().length > 0) {
      this.projects = this.projectsQuery.getAll();
    } else {
      this.projectsService.get<Project[]>().subscribe(projects => {
        this.projects = projects.map(project => createProject(project));
      });
    }

    this.tabsSubscription = this.tabsService.getTabsList().subscribe(tabs => this.tabs = tabs);
  }

  openProjectDetails(project: Project): void {
    const tab: Tab = {
      label: project.title,
      route: `projects/details/${project.id}`
    };

    if (!this.includes(tab, this.tabs)) {
      const state: LayoutState = {
        ...this.layoutState,
        contentNavigationHeight: 100
      };
      this.layoutService.updateLayoutState(state);
      this.tabsService.addTab(tab);
    }
    this.tabsService.activeTab = tab;
    this.router.navigateByUrl(tab.route);
  }

  private includes(tab: Tab, tabs: Tab[]): boolean {
    return tabs.filter(item => JSON.stringify(item) === JSON.stringify(tab)).length > 0;
  }
}
