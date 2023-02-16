import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { UserInformationModule } from '../user-information/user-information.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FirstStepComponent } from './first-step.component';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SimpleChange, SimpleChanges } from '@angular/core';
import { FirstStepService } from './services/first-step.service';
import { first, of, throwError } from 'rxjs';

describe('FirstStepComponent', () => {
  let component: FirstStepComponent;
  let fixture: ComponentFixture<FirstStepComponent>;
  let firstStepServiceSpy: any;

  let userExemple = [{
    id: 1,
    name: "Mariane de Sousa Oliveira",
    cpf: 66755873071,
    situation: "Regular",
    accounts: [
      {
        type: "Conta aplicação",
        bank: "Cooperativa Viacredi",
        accountNumber: 4444324
      },
      {
        type: "Conta corrente",
        bank: "Cooperativa Viacredi",
        accountNumber: 6666618
      }
    ]
  }];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FirstStepComponent],
      imports: [
        BrowserModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatInputModule,
        MatButtonModule,
        NgxMaskDirective,
        NgxMaskPipe,
        UserInformationModule,
        HttpClientTestingModule,
        RouterTestingModule,
        BrowserAnimationsModule
      ],
      providers: [provideNgxMask(), FirstStepService]
    }).compileComponents();

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstStepComponent);
    component = fixture.componentInstance;
    firstStepServiceSpy = fixture.debugElement.injector.get(FirstStepService);
    fixture.detectChanges();
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should ngOnChanges', () => {
    spyOn(component.showReset, 'emit');
    let prev_value = 'old';
    let new_value = 'new';
    let is_first_change: boolean = false;
    const changesObj: SimpleChanges = {
      prop1: new SimpleChange(prev_value, new_value, is_first_change),
    };
    component.resetForm = true;
    component.ngOnChanges(changesObj);
    expect(component.userData).toBeUndefined();
    expect(component.showData).toBeFalse();
    expect(component.showReset.emit).toHaveBeenCalledOnceWith(false);
  });

  it('should call sendForm', () => {
    component.form.controls['cpf'].clearValidators();
    component.form.controls['cpf'].setValue(66755873071);
    spyOn(component.showReset, 'emit')
    spyOn(firstStepServiceSpy, 'getUserByCPF').and.returnValue(of(userExemple));
    component.sendForm();
    expect(component.userData).toEqual(userExemple[0]);
    expect(component.showReset.emit).toHaveBeenCalledOnceWith(true);
  });

  it('should call sendForm with error', () => {
    component.form.controls['cpf'].clearValidators();
    component.form.controls['cpf'].setValue(66755873071);
    spyOn(window, 'alert')
    spyOn(firstStepServiceSpy, 'getUserByCPF').and.returnValue(throwError({status: 404}));
    component.sendForm();
    expect(window.alert).toHaveBeenCalled();
  })
});
