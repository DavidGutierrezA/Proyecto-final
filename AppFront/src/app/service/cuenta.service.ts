import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CuentaService {
  httpClient = inject(HttpClient)

  getAll(){
    const hhtpOptions = {
      Headers: new HttpHeaders({ 'autorizado': localStorage.getItem('user_token')! })
    }
}}
