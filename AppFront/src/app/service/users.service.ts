import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  httpClient = inject(HttpClient);
  baseUrl = 'http://3.21.244.188:8080/api/users';
  userUrl = 'http://3.21.244.188:8080/api/users';

  getAll() {
    return firstValueFrom(
      this.httpClient.get<any[]>(this.baseUrl)
    );
  }

  register(formValue:any){
    return firstValueFrom(
      this.httpClient.post<any>(`${this.userUrl}/register`, formValue)
    )
  }

  login(formValue:any){
    return firstValueFrom(
      this.httpClient.post<any>(`${this.userUrl}/login`, formValue)
    )
  }

  isLogged():boolean{
    return localStorage.getItem('user_token') ? true : false;
  }
  // constructor() { }
}
