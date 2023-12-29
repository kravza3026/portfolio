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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    SkillsComponent,
    PreviewComponent
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
