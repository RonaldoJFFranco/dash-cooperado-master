import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatStepperModule } from '@angular/material/stepper';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FirstStepModule } from '../first-step/first-step.module';

import { ConsultPageComponent } from './consult-page.component';

describe('ConsultPageComponent', () => {
  let component: ConsultPageComponent;
  let fixture: ComponentFixture<ConsultPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsultPageComponent],
      imports: [BrowserModule, MatStepperModule, FirstStepModule, HttpClientTestingModule, BrowserAnimationsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ConsultPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call changeShowResetValue', () => {
    spyOn(component.showReset, 'emit');
    component.changeShowResetValue(true);
    expect(component.showReset.emit).toHaveBeenCalledOnceWith(true);
  })
});
