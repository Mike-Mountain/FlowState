import {ComponentFactory, ComponentFactoryResolver, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminContainerComponent} from './components/admin-container/admin-container.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { AdminProjectsComponent } from './components/admin-projects/admin-projects.component';
import { AdminBlogComponent } from './components/admin-blog/admin-blog.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [AdminContainerComponent, AdminHomeComponent, AdminProjectsComponent, AdminBlogComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        SharedModule,
    ]
})
export class AdminModule {
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  public resolveComponent(): ComponentFactory<AdminContainerComponent> {
    return this.componentFactoryResolver.resolveComponentFactory(AdminContainerComponent);
  }
}
