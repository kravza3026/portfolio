import { Component, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-toggle-mode',
  templateUrl: './toggle-mode.component.html',
  styleUrls: ['./toggle-mode.component.scss']
})
export class ToggleModeComponent {
  constructor(private renderer: Renderer2, private el: ElementRef) {
  }
  mode: boolean = false;
  modeEvent(){

    const htmlElement = this.el.nativeElement.ownerDocument.body.parentElement;
    const className = 'dark';

    if (!this.mode) {
      htmlElement.classList.add(className);
    } else {
      htmlElement.classList.remove(className);
    }
    this.mode = !this.mode;
     // Викликаємо modeEvent() після додавання класу
  }

}
