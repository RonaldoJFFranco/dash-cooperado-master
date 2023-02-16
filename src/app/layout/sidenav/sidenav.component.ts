import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit{
  showFiller = false;
  menu = ['search', 'star', 'sms', 'tune', 'account_balance']
  mobile= false;
  constructor(public breakpointObserver: BreakpointObserver){}
  ngOnInit(): void {
    this.breakpointObserver
      .observe(['(max-width: 723px)'])
      .subscribe((state: BreakpointState) => {
        this.mobile = state.matches;
      });
  }
}
