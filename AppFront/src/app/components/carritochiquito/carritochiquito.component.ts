import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { estadoProducto } from 'src/app/app.state';
import { Productoo } from 'src/app/producto/producto.model';
import { Store, select } from '@ngrx/store';


@Component({
  selector: 'app-carritochiquito',
  templateUrl: './carritochiquito.component.html',
  styleUrl: './carritochiquito.component.css'
})
export class CarritochiquitoComponent {

  productosCarro: Productoo[] = []

  constructor(
    private store: Store<estadoProducto>
  ) {}

  ngOnInit(): void {
    this.store.pipe(select('Carro')).subscribe((productosCarro: Productoo[]) => {
      this.productosCarro = productosCarro
    })
  }

subtotal(){
 let sub = this.productosCarro.length*20
  return ('$'+sub)
}
  
}
