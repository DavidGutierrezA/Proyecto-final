import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  template: `<img src="./imgsi/bienvenida2.jpg" alt="...">`,
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  imagenUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    const rutaImagen = './imgsi/bienvenida2.jpg'; // Ruta de tu imagen local
    this.imagenUrl = this.sanitizer.bypassSecurityTrustResourceUrl(rutaImagen);
  }

}
