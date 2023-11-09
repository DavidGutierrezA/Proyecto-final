import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PerritoService {
  perritoUrl= 'http://Stack--Appli-EOxnewnrKH6M-361234207.us-east-2.elb.amazonaws.com:8080/api/perros'
  perritoUrl2= 'http://Stack--Appli-EOxnewnrKH6M-361234207.us-east-2.elb.amazonaws.com:8080/api/perros/perro'
  httpClient = inject(HttpClient);

  crearperros(formValue:any){
    return firstValueFrom(
      this.httpClient.post<any>(`${this.perritoUrl}/crearperros`, formValue, this.createHeaders())
    )
  }

  createHeaders() {
    return {
      headers: new HttpHeaders({
        'autorizado': localStorage.getItem
          ('user_token')!
      })
    }
  }

  getAll():Observable<any[]>{
    return this.httpClient.get<any[]>(this.perritoUrl2, this.createHeaders())
  }
}
