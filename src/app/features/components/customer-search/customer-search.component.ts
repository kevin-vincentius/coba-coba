import { Component } from '@angular/core';
import { CustomerService } from '../../../cores/services/customer.service';
import { ICustomer } from '../../../cores/interfaces/i-customer';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { IPagination } from '../../../cores/interfaces/i-pagination';

@Component({
  selector: 'app-customer-search',
  templateUrl: './customer-search.component.html',
})
export class CustomerSearchComponent {
  query: string = '';
  field: string = 'name';
  page: number = 1;
  icons = {
    search: faSearch,
  };

  constructor(private customerService: CustomerService) {}

  // onSearch() {
  //   this.customerService
  //     .search(this.field, this.query)
  //     .subscribe((resp: ICustomer[]) => {
  //       this.customerService.customers = resp;
  //     });
  // }

  onSearch() {
    this.page = 1;
    this.customerService
      .all(this.page, this.query)
      .subscribe((resp: IPagination<ICustomer[]>) => {
        this.customerService.customers = resp;
      });
  }
}
