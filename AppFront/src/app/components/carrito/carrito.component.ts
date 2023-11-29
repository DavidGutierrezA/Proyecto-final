import { Component, OnInit } from '@angular/core';
import { Productoo } from 'src/app/producto/producto.model';
import { Store, select } from '@ngrx/store';
import { estadoProducto } from 'src/app/app.state';
import { eliminar } from 'src/app/store/producto.actions';


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  productosCarro: Productoo[] = []

  constructor(
    private store: Store<estadoProducto>
  ) {}

  ngOnInit(): void {
    this.store.pipe(select('Carro')).subscribe((productosCarro: Productoo[]) => {
      this.productosCarro = productosCarro
    })
  }


  eliminarProducto(productId: any) {
    console.log('Componente: Eliminando producto con ID:', productId.id);
    this.store.dispatch(eliminar({ id: productId._id })); 
    console.log(productId._id)
  }



  // arrCarrito: any[] = [];
  // async ngOnInit() {
  //   this.arrCarrito = JSON.parse(localStorage.getItem('carrito')!)
  //   console.log(this.arrCarrito)  
  // }

  
   /*borrar(producto: any) {
   const index = this.productosCarro.findIndex((item) => item.id === producto.id);

    if (index !== -1) {
      this.productosCarro.splice(index, 1); 
      localStorage.setItem('carrito', JSON.stringify(this.productosCarro)); 
   }*/






  precio() {
    let subtotal = this.productosCarro.length * 20
    console.log('$' + subtotal)
    return ('$' + subtotal)
  }

}

