import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { PreviewComponent } from './components/preview/preview.component';

import { NgIconsModule } from '@ng-icons/core';
import { akarLinkedinV2Fill,akarTelegramFill,akarGithubFill,akarArrowDown } from '@ng-icons/akar-icons';
import { MyWorksComponent } from './components/my-works/my-works.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { ToggleModeComponent } from './components/toggle-mode/toggle-mode.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    SkillsComponent,
    PreviewComponent,
    MyWorksComponent,
    TimelineComponent,
    ToggleModeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgIconsModule.withIcons({akarLinkedinV2Fill,akarTelegramFill,akarGithubFill,akarArrowDown})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
