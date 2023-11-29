import { Component,inject } from '@angular/core';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

userService =inject(UsersService)


 isCartOpen: boolean = false;
toggleCart() {
    this.isCartOpen = !this.isCartOpen;
  }
}

