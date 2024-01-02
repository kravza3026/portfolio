import {Component, OnInit} from '@angular/core';
// @ts-ignore
import AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor() {}
  title = 'mPortfolio';
  status: boolean = false;
  clickEvent(){
    this.status = !this.status;
  }
  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
  ngOnInit() {
    AOS.init({disable: 'mobile'});//AOS - 2
    AOS.refresh()
  }

}
