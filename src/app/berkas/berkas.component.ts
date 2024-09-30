import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ISimpleProduct } from '../features/product/interfaces/i-product';

@Component({
  selector: 'app-berkas',
  templateUrl: './berkas.component.html',
  styleUrl: './berkas.component.css'
})
export class BerkasComponent {
  @Input() counter!: number;
  @Input() product!: ISimpleProduct;
  @Output() emit: EventEmitter<number> = new EventEmitter();

  up(){
    this.counter++;
    this.emit.emit(this.counter);
  }

  down(){
    this.counter--;
    this.emit.emit(this.counter);
  }
}
