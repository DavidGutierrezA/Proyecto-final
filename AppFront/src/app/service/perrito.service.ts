import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, firstValueFrom } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PerritoService {
  perritoUrl= `${environment.urlActual}/api/perros`
  perritoUrl2= `${environment.urlActual}/api/perros/perro` 
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
