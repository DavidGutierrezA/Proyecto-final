import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { estadoProducto } from 'src/app/app.state';
import { Productoo } from 'src/app/producto/producto.model';
import { Store, select } from '@ngrx/store';
import { eliminar } from 'src/app/store/producto.actions';


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
  

eliminarProducto(productId: any) {
  console.log('Componente: Eliminando producto con ID:', productId._id);
  this.store.dispatch(eliminar({ id: productId._id })); 
  console.log(productId._id)
}

precio() {
  let subtotal = this.productosCarro.length * 20
  console.log('$' + subtotal)
  return ('$' + subtotal)
}

}
