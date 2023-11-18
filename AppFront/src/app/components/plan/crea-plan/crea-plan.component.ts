
import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PerritoService } from 'src/app/service/perrito.service';

@Component({
  selector: 'app-crea-plan',
  templateUrl: './crea-plan.component.html',
  styleUrls: ['./crea-plan.component.css']
})
export class CreaPlanComponent {

  router = inject(Router)

  formulariop: FormGroup;
  constructor(private perritoservice: PerritoService) {
    this.formulariop = new FormGroup({
      nombre: new FormControl(),
      edad: new FormControl(),
    })
  }

  async onSubmit() {
    const res = await this.perritoservice.crearperros(this.formulariop.value);
    this.semanas()
    this.router.navigate(['./gestionarPlan']);
  }

  semanas() {
    const inputSemanas = document.getElementById('semanas') as HTMLInputElement;

    if (inputSemanas) {
      const semanas = inputSemanas.value;
      // Ahora, valorSemanas contiene el valor del input "semanas"
      console.log('Valor de semanas:', semanas);

      // Puedes hacer lo que necesites con el valor, como almacenarlo en localStorage
      localStorage.setItem('semanas', semanas);
    } else {
      console.error('No se encontró el elemento con ID "semanas"');
    }
  }
}


