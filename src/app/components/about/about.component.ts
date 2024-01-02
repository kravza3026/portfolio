import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  skills: any[] = [
    { title: 'HTML', progress: 75, },
    { title: 'CSS,SCSS', progress: 70 },
    { title: 'JS,JQuery', progress: 65 },
    { title: 'Bootstrap,Tailwind', progress: 60 },
    { title: 'Angular', progress: 50 },
    { title: 'Laravel', progress: 55 },
    { title: 'Figma,Photoshop', progress: 45 },
    { title: 'Git,Jira', progress: 75 }

  ];
}
