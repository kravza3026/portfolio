import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from "./components/about/about.component";
import {MyWorksComponent} from "./components/my-works/my-works.component";
import {SkillsComponent} from "./components/skills/skills.component";
import {PreviewComponent} from "./components/preview/preview.component";
import {TimelineComponent} from "./components/timeline/timeline.component";


const routes:  Routes  =  [
  { path: '', redirectTo:  'home', pathMatch:  'full'  },
  { path: 'home', component: PreviewComponent, data: {state:  'home'}  },
  { path: 'about', component: AboutComponent, data: {state:  'about'}  },
  { path: 'works', component: MyWorksComponent, data: {state:  'works'}  },
  { path: 'skills', component: SkillsComponent, data: {state:  'skills'}  },
  { path: 'timeline', component: TimelineComponent, data: {state:  'timeline'}  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
