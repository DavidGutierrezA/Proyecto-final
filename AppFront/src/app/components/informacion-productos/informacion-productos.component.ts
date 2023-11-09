import { Component } from '@angular/core';

@Component({
  selector: 'app-informacion-productos',
  templateUrl: './informacion-productos.component.html',
  styleUrls: ['./informacion-productos.component.css']
})
export class InformacionProductosComponent {
  scrollvideo() {
    const video = document.getElementById("video");
    if (video) {
        video.scrollIntoView({ behavior: "smooth" });
    }
}
scrollcert() {
  const cert = document.getElementById("certificado");
  if (cert) {
      cert.scrollIntoView({ behavior: "smooth" });
  }
}
}
