import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICustomer } from '../../../cores/interfaces/i-customer';
import { ReservasiService } from '../../../cores/services/reservasi.service';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css'],
})
export class CustomerDetailComponent {
  @Input() customer!: ICustomer;
  @Input() check: Boolean = true;
  icons = {
    right_arrow: faArrowCircleRight,
  };
  @Input() selectedCustomerId!: number
  @Output() customerToBeSelected = new EventEmitter<ICustomer>();

  constructor(private reservasiService: ReservasiService) {}

  customerReservasi(customer: ICustomer) {
    this.customerToBeSelected.emit(customer);
    this.reservasiService.customer = customer;
  }
}
