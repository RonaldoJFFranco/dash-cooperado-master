import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnChanges{
  @Input() showReset: any;
  @Output() resetForm = new EventEmitter<boolean>();

  resetChange(){
    this.resetForm.emit(true);
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }
}
