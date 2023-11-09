import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, } from '@angular/forms';
import { UsersService } from 'src/app/service/users.service';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  router = inject(Router)
  formulario: FormGroup;
  constructor(private userService: UsersService) {
    this.formulario = new FormGroup({
      nombre: new FormControl(),
      contrasena: new FormControl(),
      correo: new FormControl()
    })
  }


  async onSubmit() {
    const res = await this.userService.register(this.formulario.value);
    console.log(res)
    this.router.navigate(['./login']);
  }

}

