import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../../cores/services/customer.service';
import { ReservasiService } from '../../../cores/services/reservasi.service';
import { ICustomer } from '../../../cores/interfaces/i-customer';
import { IPagination } from '../../../cores/interfaces/i-pagination';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons/faArrowCircleRight';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
})
export class CustomerListComponent implements OnInit {
  page: number = 1;
  icons = {
    right_arrow: faArrowCircleRight
  }
  selectedCustomerId!: number;

  constructor(private customerService: CustomerService, private reservasiService: ReservasiService) {}

  ngOnInit(): void {
    this.customerService.all().subscribe((resp: IPagination<ICustomer[]>) => {
      this.customerService.customers = resp;
    });
  }

  onPaginateCustomers(data: number) {
    this.customerService
      .all(data)
      .subscribe((resp: IPagination<ICustomer[]>) => {
        this.customerService.customers = resp;
      });
  }

  get customers(): IPagination<ICustomer[]> {
    return this.customerService.customers;
  }

  onCustomerSelected(customer: ICustomer): void {
    this.selectedCustomerId = customer.id;
  }
}
