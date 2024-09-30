import { Component, OnInit } from '@angular/core';
import { ISimpleProduct } from './features/product/interfaces/i-product';
import { UserService } from './cores/services/user.service';
import { IUser } from './cores/interfaces/i-user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users: IUser[] = [];
  loading: boolean = false;

  // constructor(private userService: UserService){}

  // ngOnInit(): void {
  //     this.userService.all().subscribe((resp: IUser[]) => {
  //       this.users = resp;
  //     });
  // }
  // product: ISimpleProduct = {
  //   title: "Contoh product 01", 
  //   description: "lorem ipsum",
  //   price: 56000, 
  //   stock: 10
  // }
  // counter: number = 10
  // handler(data: number) {
  //   this.counter = data;
  // }

  // fontSize: number = 16;
  // isActive: boolean = false;
  // show: boolean = false;
  // classObject = { 
  //   'text-primary': true,
  //   'text-lg': true,
  // }
}
