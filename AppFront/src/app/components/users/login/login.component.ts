import { Component, inject } from '@angular/core';
import { FormGroup, FormControl,} from '@angular/forms';
import { UsersService } from 'src/app/service/users.service';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

router= inject(Router)

    formulario: FormGroup;
    constructor(private userService: UsersService){
      this.formulario = new FormGroup({
        nombre: new FormControl(),
        contrasena: new FormControl(),
        correo: new FormControl()
      })
    }
  
  
    async onSubmit(){
      const res = await this.userService.login(this.formulario.value);
      if (!res.error) {console.log(res)
        localStorage.setItem('user_token', res.token)
      this.router.navigate(['./inicio']);
      

      }
     }
  
  }
  

