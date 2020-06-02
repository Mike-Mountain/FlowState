import {ComponentFactory, ComponentFactoryResolver, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminContainerComponent} from './components/admin-container/admin-container.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { AdminProjectsComponent } from './components/admin-projects/admin-projects.component';
import { AdminBlogComponent } from './components/admin-blog/admin-blog.component';


@NgModule({
  declarations: [AdminContainerComponent, AdminHomeComponent, AdminProjectsComponent, AdminBlogComponent],
  imports: [
    CommonModule,
  ]
})
export class AdminModule {
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  public resolveComponent(): ComponentFactory<AdminContainerComponent> {
    return this.componentFactoryResolver.resolveComponentFactory(AdminContainerComponent);
  }
}
