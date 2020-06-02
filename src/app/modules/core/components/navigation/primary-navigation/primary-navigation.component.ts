import {Component, OnInit} from '@angular/core';
import {ProjectsQuery} from '../../../../projects/store/projects.query';
import {Project} from '../../../../projects/store/project.model';
import {TabsService} from '../../../services/tabs-service/tabs.service';
import {Tab} from '../../../models/tab.interface';
import {Router} from '@angular/router';
import {LayoutService} from '../../../services/layout-service/layout.service';
import {LayoutState} from '../../../models/layout-state.inteface';

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
  layoutState: LayoutState;

  constructor(public projectsQuery: ProjectsQuery,
              private tabsService: TabsService,
              private layoutService: LayoutService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  search(searchText: string) {
  }

  selectProject(project: Project) {
    this.selectedProject = project;
    this.dropdownIsActive = false;
  }

  runProject() {
    const tab: Tab = {
      route: `/embedded/project/${this.selectedProject.slug}`,
      label: `${this.selectedProject.title} (RUN)`
    };
    this.tabsService.addTab(tab);
    this.tabsService.activeTab = tab;
    this.router.navigateByUrl(tab.route);
    this.layoutService.getLayoutState().subscribe(state => {
      this.layoutState = {
        ...state,
        contentNavigationHeight: 100
      };
    });
    if (this.layoutState) {
      this.layoutService.updateLayoutState(this.layoutState);
    }
  }
}
