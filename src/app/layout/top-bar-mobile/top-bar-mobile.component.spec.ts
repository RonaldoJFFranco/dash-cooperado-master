import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ConsultPageModule } from 'src/app/features/consult-page/consult-page.module';

import { TopBarMobileComponent } from './top-bar-mobile.component';

describe('TopBarMobileComponent', () => {
  let component: TopBarMobileComponent;
  let fixture: ComponentFixture<TopBarMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopBarMobileComponent],
      imports: [
        MatSidenavModule,
        MatButtonModule,
        MatIconModule,
        MatToolbarModule,
        ConsultPageModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TopBarMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call changeStatus', () => {
    spyOn(component.toggleEvent, 'emit');
    component.changeStatus();
    expect(component.toggleEvent.emit).toHaveBeenCalledTimes(1);
  });
});
