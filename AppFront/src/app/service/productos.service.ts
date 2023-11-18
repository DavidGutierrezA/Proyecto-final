
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  constructor() {}

  productoUrl = 'http://3.21.244.188:8080/api/productos';

  httpClient = inject(HttpClient);

  getAlll() {
    return firstValueFrom(this.httpClient.get<any[]>(this.productoUrl) as Observable<any[]>);
  }


  }












