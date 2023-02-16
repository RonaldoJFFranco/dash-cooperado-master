import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SidenavComponent } from './sidenav/sidenav.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ConsultPageModule } from '../features/consult-page/consult-page.module';
import { FooterComponent } from './footer/footer.component';
import { MatButtonModule } from '@angular/material/button';
import { TopBarMobileComponent } from './top-bar-mobile/top-bar-mobile.component';

@NgModule({
  declarations: [
    SidenavComponent,
    TopBarComponent,
    MainLayoutComponent,
    FooterComponent,
    TopBarMobileComponent,
  ],
  imports: [
    BrowserModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    ConsultPageModule,
  ],
  exports: [MainLayoutComponent],
  providers: [],
})
export class LayoutModule {}
