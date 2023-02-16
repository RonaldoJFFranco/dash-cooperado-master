import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirstStepService {
  route = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  getUserByCPF(cpf: number): any {
    return this.http.get<any>(`${this.route}/users?cpf=${cpf}`).pipe(
      map((resp) => {
        return resp;
      })
    );
  }
}
