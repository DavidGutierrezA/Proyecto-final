import { Component, inject, signal, OnInit } from '@angular/core';
import { PerritoService } from 'src/app/service/perrito.service';

@Component({
  selector: 'app-gestionar-plan',
  templateUrl: './gestionar-plan.component.html',
  styleUrls: ['./gestionar-plan.component.css']
})
export class GestionarPlanComponent implements OnInit {

  arrPerritos = signal<any[]>([])
  perritoService = inject(PerritoService)
  async datosperritos() {
    const perrito = await this.perritoService.getAll();
    perrito.subscribe(
      (response) => {
        console.log(response)
        this.arrPerritos.set(response)

      }
    )
  }


  aleatorio: number = 0;
  serviciosDia: number = 0;
  mes: number = 30
  tamanoPaquete: number = 2000
  semana: number = parseInt(localStorage.getItem('semanas')!)
  recibeCada: number = 0;
  numDias: number = 0;
  cantPaquetes: number = 0;
  costTotal: number = 0;
  async numeroAleatorio() {
    var numerosEspecificos = [200, 300, 400, 500, 600];
    var indiceAleatorio = Math.floor(Math.random() * numerosEspecificos.length);
    this.aleatorio = numerosEspecificos[indiceAleatorio];
    this.serviciosDia = Math.ceil(this.aleatorio / 3)
    this.recibeCada = this.semana
    this.numDias = this.semana * 7
    this.cantPaquetes = Math.ceil((this.numDias * this.aleatorio) / this.tamanoPaquete)
    this.costTotal = this.cantPaquetes * 20
  }

  ngOnInit() {
    this.datosperritos();
    this.numeroAleatorio();
  }
}
