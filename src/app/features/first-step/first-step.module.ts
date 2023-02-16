import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserModule } from '@angular/platform-browser';
import { FirstStepComponent } from './first-step.component';
import { MatInputModule } from '@angular/material/input';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import {MatButtonModule} from '@angular/material/button';
import { UserInformationModule } from '../user-information/user-information.module';

@NgModule({
  declarations: [FirstStepComponent],

  imports: [
    BrowserModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    NgxMaskDirective,
    NgxMaskPipe,
    UserInformationModule
  ],
  exports: [FirstStepComponent],
  providers: [provideNgxMask()],
})
export class FirstStepModule {}
