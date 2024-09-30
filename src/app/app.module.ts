import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgbModule, NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductDetailComponent } from './features/product/components/product-detail/product-detail.component';
import { NavigationComponent } from './shared/components/navigation/navigation.component';
import { TodoFormComponent } from './features/todos/components/todo-form/todo-form.component';
import { TodoComponent } from './features/todos/components/todo/todo.component';
import { TodoDetailComponent } from './features/todos/components/todo-detail/todo-detail.component';
import { TodoListComponent } from './features/todos/components/todo-list/todo-list.component';
import { TodoTotalComponent } from './features/todos/components/todo-total/todo-total.component';
import { AttrDirective } from './attr.directive';
import { TodoService } from './cores/services/todo.service';
import { CustomerChoiceComponent } from './features/components/customer-choice/customer-choice.component';
import { CustomerDetailComponent } from './features/components/customer-detail/customer-detail.component';
import { CustomerListComponent } from './features/components/customer-list/customer-list.component';
import { CustomerSearchComponent } from './features/components/customer-search/customer-search.component';
import { ReservasiCreateComponent } from './features/reservasi/components/reservasi-create/reservasi-create.component';
import { ReservasiChoiceComponent } from './features/reservasi/components/reservasi-choice/reservasi-choice.component';
import { ReservasiDetailComponent } from './features/reservasi/components/reservasi-detail/reservasi-detail.component';
import { ReservasiListComponent } from './features/reservasi/components/reservasi-list/reservasi-list.component';
import { ReservasiSearchComponent } from './features/reservasi/components/reservasi-search/reservasi-search.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailComponent,
    NavigationComponent,
    TodoFormComponent,
    TodoComponent,
    TodoDetailComponent,
    TodoListComponent,
    TodoTotalComponent,
    AttrDirective,
    CustomerChoiceComponent,
    CustomerDetailComponent,
    CustomerListComponent,
    CustomerSearchComponent,
    ReservasiCreateComponent,
    ReservasiChoiceComponent,
    ReservasiDetailComponent,
    ReservasiListComponent,
    ReservasiSearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    FontAwesomeModule,
    NgbTimepickerModule
  ],
  providers: [TodoService, provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
