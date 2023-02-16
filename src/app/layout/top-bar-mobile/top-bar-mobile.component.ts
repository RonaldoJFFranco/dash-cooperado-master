import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-top-bar-mobile',
  templateUrl: './top-bar-mobile.component.html',
  styleUrls: ['./top-bar-mobile.component.scss']
})
export class TopBarMobileComponent {
  @Output() toggleEvent = new EventEmitter<boolean>();

  changeStatus(){
    this.toggleEvent.emit(true);
  }
}
