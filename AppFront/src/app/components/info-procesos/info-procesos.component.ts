import { Component } from '@angular/core';

@Component({
  selector: 'app-info-procesos',
  templateUrl: './info-procesos.component.html',
  styleUrls: ['./info-procesos.component.css']
})
export class InfoProcesosComponent {
  
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
