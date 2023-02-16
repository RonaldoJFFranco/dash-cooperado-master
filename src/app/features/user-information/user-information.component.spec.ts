import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';

import { UserInformationComponent } from './user-information.component';

describe('UserInformationComponent', () => {
  let component: UserInformationComponent;
  let fixture: ComponentFixture<UserInformationComponent>;
  let dataMock = {
    name: 'Mariane de Sousa Oliveira',
    cpf: 11122233344,
    situation: 'Regular',
    accounts:[
      {
        type: 'Conta aplicação',
        bank: 'Cooperativa Viacredi',
        accountNumber: '557932-4'
      },
      {
        type: 'Conta corrente',
        bank: 'Cooperativa Viacredi',
        accountNumber: 7784618
      }
    ]
  }
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserInformationComponent],
      imports: [
        BrowserModule,
        MatCardModule,
        MatGridListModule,
        MatIconModule,
        MatButtonModule,
        HttpClientTestingModule
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(UserInformationComponent);
    component = fixture.componentInstance;
    component.user = dataMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
