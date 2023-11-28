import { Component, OnInit } from '@angular/core';
import { find } from 'rxjs';
import { ProductosService } from 'src/app/service/productos.service';
import { Store } from '@ngrx/store';
import { guardar } from 'src/app/store/producto.actions';
import { Productoo } from 'src/app/producto/producto.model';
import { estadoProducto } from 'src/app/app.state';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  arrProductos: any[] = [];

  constructor(private productosService: ProductosService,
    private store: Store) { }

  async ngOnInit() {
    try {
      const productos = await this.productosService.getAlll();
      this.arrProductos = productos;
      console.log(productos);
    } catch (error) {
      console.error('Error al obtener los productos', error);
    }
  }



  agregarCarrito(producto: any) {
    let carrito = JSON.parse(localStorage.getItem('carrito')!)
    console.log(carrito)
    if (carrito == null) {
      localStorage.setItem('carrito', JSON.stringify([producto]))
    }
    else {
      carrito.push(producto)
      localStorage.setItem('carrito', JSON.stringify(carrito))
    }
  }


  guardar(newProducts:Productoo) {
    this.store.dispatch(guardar({productoo: newProducts}))
  }




  //  // Función para agregar al carrito
  //  agregarcarrito(idToFind: number, descripcionToFind: string) {
  //   const productoEncontrado = this.arrProductos.find(
  //     producto => producto.id === idToFind && producto.descripcion === descripcionToFind
  //   );

  //   if (productoEncontrado) {
  //     // Realiza acciones con el producto encontrado (puedes agregarlo al carrito aquí)
  //     console.log('Producto encontrado:', productoEncontrado);
  //   } else {
  //     console.log('Producto no encontrado.');
  //   }
  // }
}










