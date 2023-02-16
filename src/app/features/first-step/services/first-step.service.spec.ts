
import { HttpClient } from "@angular/common/http";
import { defer, of } from "rxjs";
import { FirstStepService } from "./first-step.service"

describe('FirstStepService',() => {
  let service: FirstStepService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('Httpclient',['get'])
    service = new FirstStepService(httpClientSpy);
  })

  let userExemple = {
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
  }

  it('deve testar getUserCPF', () => {
    httpClientSpy.get.and.returnValue(of(userExemple));
    service.getUserByCPF(66755873071).subscribe({
      next: (resp: any) =>{
        expect(resp).toEqual(userExemple)
      },
      error: () => {}
    });
    expect(httpClientSpy.get).toHaveBeenCalledTimes(1);
  })
})

export function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}