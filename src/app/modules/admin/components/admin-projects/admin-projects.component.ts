import {Component, OnInit} from '@angular/core';
import {ProjectsQuery} from '../../../projects/store/projects.query';
import {ProjectsService} from '../../../projects/store/projects.service';
import {createProjectsForm, Project} from '../../../projects/store/project.model';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {FileUploadItem} from '../../../shared/models/file-upload.model';

@Component({
  selector: 'app-admin-projects',
  templateUrl: './admin-projects.component.html',
  styleUrls: ['./admin-projects.component.scss']
})
export class AdminProjectsComponent implements OnInit {

  activeProject: Project;
  projectForm: FormGroup;
  screenshots: FormArray;

  constructor(private projectsService: ProjectsService,
              private formBuilder: FormBuilder,
              public projectsQuery: ProjectsQuery) {
  }

  ngOnInit(): void {
    if (this.projectsQuery.getAll().length <= 0) {
      this.projectsService.get<Project[]>().subscribe(projects => {
        this.activeProject = projects[0];
        this.projectForm = createProjectsForm(this.formBuilder, this.activeProject);
        this.screenshots = this.projectForm.get('screenshots') as FormArray;
      });
    } else {
      this.activeProject = this.projectsQuery.getAll()[0];
      this.projectForm = createProjectsForm(this.formBuilder, this.activeProject);
      this.screenshots = this.projectForm.get('screenshots') as FormArray;
    }
  }

  public changeActiveProject(project: Project): void {
    this.activeProject = project;
    this.projectForm = createProjectsForm(this.formBuilder, project);
    this.screenshots = this.projectForm.get('screenshots') as FormArray;
  }

  submit() {
    if (this.activeProject) {
      this.projectsService.update<Project>(this.activeProject.id, this.projectForm.value).subscribe(project => {
        console.log(project);
      }, error => {
        console.log(error);
      });
    } else {
      this.projectsService.add<Project>(this.projectForm.value).subscribe(project => {
        console.log(project);
      }, error => {
        console.log(error);
      });
    }
  }

  createEmptyProject() {
    this.activeProject = undefined;
    this.projectForm = createProjectsForm(this.formBuilder, {});
  }

  addFiles(files: FileUploadItem[]) {
    files.forEach(file => {
      this.screenshots.push(new FormControl(file));
    });
  }
}
