import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { filter, from, map, Observable } from 'rxjs';
import { ConsultPageComponent } from 'src/app/features/consult-page/consult-page.component';
import { ConsultPageModule } from 'src/app/features/consult-page/consult-page.module';
import { FooterComponent } from '../footer/footer.component';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { TopBarMobileComponent } from '../top-bar-mobile/top-bar-mobile.component';
import { TopBarComponent } from '../top-bar/top-bar.component';

import { MainLayoutComponent } from './main-layout.component';

describe('MainLayoutComponent', () => {
  let component: MainLayoutComponent;
  let fixture: ComponentFixture<MainLayoutComponent>;

  const fakeObserve = (s: string[]): Observable<BreakpointState> =>
    from(matchObj).pipe(
      filter(match => match.matchStr === s[0]),
      map(match => ({ matches: match.result, breakpoints: {} })),
    );
  const breakpointSpy = jasmine.createSpyObj('BreakpointObserver', ['observe']);
  breakpointSpy.observe.and.callFake(fakeObserve);

  const matchObj = [
    // initially all are false
    { matchStr: '(min-width: 723px)', result: false },
    { matchStr: '(max-width: 550px)', result: false },
  ]

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        MainLayoutComponent,
        SidenavComponent,
        TopBarComponent,
        TopBarMobileComponent,
        ConsultPageComponent,
        FooterComponent
      ],
      imports: [
        BrowserModule,
        MatSidenavModule,
        MatButtonModule,
        MatIconModule,
        MatToolbarModule,
        ConsultPageModule,
        BrowserAnimationsModule,
        HttpClientTestingModule,
      ],
      providers: [{ provide: BreakpointObserver, useValue: breakpointSpy }]
    }).compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(MainLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call ngOnInit first breakpoint observer', () => {
    component.drawer.close();
    fixture.detectChanges();
    resize(1200);
    spyOn(component.drawer, 'toggle');
    component.ngOnInit();
    expect(component.drawer.toggle).toHaveBeenCalled();
  });

  it('should call ngOnInit second breakpoint observer', () => {
    component.drawer.open();
    fixture.detectChanges();
    resize(500);
    spyOn(component.drawer, 'toggle');
    component.ngOnInit();
    expect(component.drawer.toggle).toHaveBeenCalled();
  });

  it('should call changSidebarStatus', () => {
    spyOn(component.drawer, 'toggle');
    component.changeSidebarStatus(true);
    expect(component.drawer.toggle).toHaveBeenCalled();
  });

  it('should call changeResetFormValue', () => {
    component.changeResetFormValue(true);
    expect(component.resetForm).toBeTrue();
    expect(component.showReset).toBeUndefined();
  });

  it('should call changeShowResetValue', () => {
    component.changeShowResetValue(true);
    expect(component.showReset).toBeTrue();
    expect(component.resetForm).toBeUndefined();
  });

  function resize(width: number): void {
    matchObj[0].result = width >= 722;
    matchObj[1].result = width <= 550;
    console.log(matchObj)
  }
});
