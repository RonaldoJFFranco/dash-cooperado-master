import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserInformationComponent } from './user-information.component';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [UserInformationComponent],
  imports: [
    BrowserModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports: [UserInformationComponent],
})
export class UserInformationModule {}
