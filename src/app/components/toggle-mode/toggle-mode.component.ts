import {Component, Renderer2, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-toggle-mode',
  templateUrl: './toggle-mode.component.html',
  styleUrls: ['./toggle-mode.component.scss']
})
export class ToggleModeComponent implements OnInit{
  constructor(private renderer: Renderer2, private el: ElementRef) {
  }
  mode: boolean =false;
  ngOnInit() {
    const theamMode = window.localStorage.getItem('theme');
    if(theamMode == 'dark'){this.mode = true}else{this.mode = false}
  }

  modeEvent(){

    const htmlElement = this.el.nativeElement.ownerDocument.body.parentElement;
    const className = 'dark';

    if (!this.mode) {
      htmlElement.classList.add(className);
      localStorage.setItem('theme','dark')
      this.mode = false
    } else {
      htmlElement.classList.remove(className);
      localStorage.setItem('theme','light')
      this.mode = true
    }
    this.mode = !this.mode;
  }

}
