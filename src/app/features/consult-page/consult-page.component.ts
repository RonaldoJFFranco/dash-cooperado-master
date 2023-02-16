import { Component, EventEmitter, Input, Output,  } from '@angular/core';

@Component({
  selector: 'app-consult-page',
  templateUrl: './consult-page.component.html',
  styleUrls: ['./consult-page.component.scss'],
})
export class ConsultPageComponent{

  @Input() resetForm: any;
  @Output() showReset = new EventEmitter<boolean>();

  changeShowResetValue(event: boolean){
    this.showReset.emit(event);
  }
}
