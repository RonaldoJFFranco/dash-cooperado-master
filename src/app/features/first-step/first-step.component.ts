import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { isValidCpf } from 'src/shared/utils/validation';
import { FirstStepService } from './services/first-step.service';

@Component({
  selector: 'app-first-step',
  templateUrl: './first-step.component.html',
  styleUrls: ['./first-step.component.scss'],
})
export class FirstStepComponent implements OnChanges {
  @Output() showReset = new EventEmitter<boolean>();
  @Input() resetForm: boolean;
  form: FormGroup;
  showData: boolean = false;
  userData: any = undefined;

  constructor(
    private formBuilder: FormBuilder,
    private firstStepService: FirstStepService
  ) {
    this.form = this.formBuilder.group({
      cpf: new FormControl(null, [Validators.required, isValidCpf()]),
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    if(this.resetForm ){
      this.userData = undefined;
      this.showData = false;
      this.showReset.emit(false);
    }
  }

  public checkError = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  };

  sendForm() {
    if (this.form.valid) {
      this.firstStepService.getUserByCPF(this.form.value.cpf).subscribe(
        (resp: any) => {
          if(resp[0]){
            this.userData = resp[0];
            this.showReset.emit(true);
          }
        },
        (err: any) => {
          alert('Tivemos um problema na consulta tente mais tarde!');
        }
      );
      this.showData = true;
    }
  }
}
