import { Component, TemplateRef } from '@angular/core';
import { IReservasi } from '../../../../cores/interfaces/i-reservasi';
import { ReservasiService } from '../../../../cores/services/reservasi.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-reservasi-create',
  templateUrl: './reservasi-create.component.html',
})
export class ReservasiCreateComponent {
  time = { hour: 13, minute: 30 };

  constructor(
    private reservasiService: ReservasiService,
    private modalService: NgbModal
  ) {}

  get reservasi() {
    return this.reservasiService.reservasi;
  }

  // set reservasi(data: IReservasi) {
  //   this.reservasiService.reservasi = data;
  // }

  onCreate(notif: TemplateRef<any>) {
    this.reservasiService.create(this.time).subscribe(() => {
      this.reservasiService.reservasi.nomorKontrak = '';
      this.reservasiService.reservasi.nomorBPKB = '';
      this.reservasiService.reservasi.tipeKendaraan = '';
      this.reservasiService.reservasi.jadwal = 0;
      this.reservasiService.reservasi.real = 0;
      this.reservasiService.reservasi.estimasi = 0;
      this.reservasiService.reservasi.customer.name = '';
      this.reservasiService.reservasi.customer.email = '';
      this.reservasiService.reservasi.customer.status = '';
    });

    this.open(notif);
  }

  onGetReservation(data: IReservasi) {
    this.reservasiService.reservasi = data;
  }

  closeResult = '';

  open(notif: TemplateRef<any>) {
    this.modalService.open(notif, { size: 'md', centered: true }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    );
  }

  private getDismissReason(reason: any): string {
    switch (reason) {
      case ModalDismissReasons.ESC:
        return 'by pressing ESC';
      case ModalDismissReasons.BACKDROP_CLICK:
        return 'by clicking on a backdrop';
      default:
        return `with: ${reason}`;
    }
  }
}
