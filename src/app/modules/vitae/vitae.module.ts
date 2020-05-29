import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VitaeContainerComponent} from './components/vitae-container/vitae-container.component';
import {SkillsComponent} from './components/skills/skills.component';
import {HobbiesComponent} from './components/hobbies/hobbies.component';
import {ExperienceComponent} from './components/experience/experience.component';
import {EducationComponent} from './components/education/education.component';
import {ContactComponent} from './components/contact/contact.component';


@NgModule({
  declarations: [
    VitaeContainerComponent,
    SkillsComponent,
    HobbiesComponent,
    ExperienceComponent,
    EducationComponent,
    ContactComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    VitaeContainerComponent
  ]
})
export class VitaeModule {
}
