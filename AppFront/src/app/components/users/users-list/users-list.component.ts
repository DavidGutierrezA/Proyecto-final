import { Component, signal } from '@angular/core';
import { inject } from '@angular/core';
import { UsersService } from 'src/app/service/users.service';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']

})
export class UsersListComponent {

  arrUsers = signal<any[]>([]);

  usersService = inject(UsersService)

  async ngOnInit(){
    const usuarios = await this.usersService.getAll();
    this.arrUsers.set(usuarios);
    console.log(usuarios)
    
     }
}


