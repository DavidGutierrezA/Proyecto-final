import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  arrCarrito: any[] = [];
  async ngOnInit() {
    this.arrCarrito = JSON.parse(localStorage.getItem('carrito')!)
    console.log(this.arrCarrito)  
  }

  borrar(producto: any) {
    const index = this.arrCarrito.findIndex((item) => item.id === producto.id);

    if (index !== -1) {
      this.arrCarrito.splice(index, 1); // Elimina el producto del array
      localStorage.setItem('carrito', JSON.stringify(this.arrCarrito)); // Actualiza el carrito en el localStorage
    }
  }

  precio() {
    let subtotal = this.arrCarrito.length * 20
    console.log('$' + subtotal)
    return ('$' + subtotal)
  }

}

