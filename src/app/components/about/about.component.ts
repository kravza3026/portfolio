import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  skills: any[] = [
    { title: 'HTML', progress: 75, baseColor: 'bg-gray-200', darkColor: 'bg-gray-700' },
    { title: 'CSS,SCSS', progress: 70,baseColor: 'bg-gray-200', darkColor: 'bg-gray-600' },
    { title: 'JS,JQuery', progress: 65,baseColor: 'bg-gray-200', darkColor: 'bg-gray-500' },
    { title: 'Bootstrap,Tailwind', progress: 60,baseColor: 'bg-gray-200', darkColor: 'bg-gray-500' },
    { title: 'Angular', progress: 50,baseColor: 'bg-gray-200', darkColor: 'bg-gray-500' },
    { title: 'Laravel', progress: 55,baseColor: 'bg-gray-200', darkColor: 'bg-gray-500' },
    { title: 'Figma,Photoshop', progress: 45,baseColor: 'bg-gray-200', darkColor: 'bg-gray-500' },
    { title: 'Git,Jira', progress: 75,baseColor: 'bg-gray-200', darkColor: 'bg-gray-500' },

  ];
}
