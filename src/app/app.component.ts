import {Component, OnInit} from '@angular/core';
import  {trigger, transition, useAnimation}  from  "@angular/animations";
import  {rotateFlipToTop}  from  "ngx-router-animations";
// @ts-ignore
import AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('rotateFlipToLeft', [ transition('* => *', useAnimation(rotateFlipToTop,{
        params: {enterTiming: '0.75', leaveTiming: '0.75', enterDelay: '0', leaveDelay: '0'}
      }
    ))])
  ]
})
export class AppComponent implements OnInit{
  public getState(outlet:any) {
    console.log(outlet.activatedRouteData.state)
    return outlet.activatedRouteData.state;
  }
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
    // AOS.init({disable: 'mobile'});//AOS - 2
    // AOS.refresh()
  }

}
