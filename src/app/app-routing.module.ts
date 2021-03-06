import { Expression } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  {
    path:"",
    component: HomeComponent
  },
  {
    path:"about",
    component: AboutComponent
  },
  {
    path:"education",
    component: EducationComponent
  },
  {
    path:"skills",
    component:SkillsComponent
  },
  {
    path:"experience",
    component: ExperienceComponent
  },
  {
    path:"projects",
    component: ProjectsComponent
  },
  {
    path:"contact",
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
