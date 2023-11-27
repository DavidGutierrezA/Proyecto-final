
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  constructor() {}

  productoUrl = `${environment.urlActual}/api/productos`;

  httpClient = inject(HttpClient);

  getAlll() {
    return firstValueFrom(this.httpClient.get<any[]>(this.productoUrl) as Observable<any[]>);
  }


  }












