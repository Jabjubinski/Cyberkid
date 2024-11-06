import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  
  isMouseOver: boolean = false;
  hideWindowTime!: any;
  
  mouseOver(){
    this.isMouseOver = true;
  }
  mouseLeave(){
    this.hideWindowTime = setTimeout(() => {
      this.isMouseOver = false;
    }, 3000);
  }
}
