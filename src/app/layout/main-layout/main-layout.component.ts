import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit {
  @ViewChild(MatDrawer) drawer: MatDrawer;

  showReset: any;
  @Output() resetFormChange = new EventEmitter<boolean>();
  resetForm: boolean | undefined;

  constructor(public breakpointObserver: BreakpointObserver) {}
  ngOnInit(): void {
    this.breakpointObserver
      .observe(['(min-width: 723px)'])
      .subscribe((state: BreakpointState) => {
        if (this.drawer && !this.drawer.opened && state.matches) {
          this.drawer.toggle();
        }
      });
    this.breakpointObserver
      .observe(['(max-width: 550px)'])
      .subscribe((state: BreakpointState) => {
        if (this.drawer?.opened && state.matches) {
          this.drawer.toggle();
        }
      });
  }

  changSidebarStatus(clicked: boolean) {
    this.drawer.toggle();
  }

  changeResetFormValue(event: boolean | undefined) {
    this.resetForm = event;
    this.showReset = undefined;
  }

  changeShowResetValue(event: any) {
    this.showReset = event;
    this.resetForm = undefined;
  }
}
