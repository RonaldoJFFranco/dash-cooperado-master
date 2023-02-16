import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ConsultPageComponent } from "./consult-page.component";

import { MatStepperModule } from '@angular/material/stepper';
import { FirstStepModule } from "../first-step/first-step.module";
@NgModule({
    declarations: [ConsultPageComponent],
    imports: [BrowserModule, MatStepperModule, FirstStepModule ],
    exports: [ConsultPageComponent],
    providers: [],
  })
  export class ConsultPageModule {}