import { Component, OnInit } from '@angular/core';
import { TransportService } from '../transport.service';
import { Transport } from '../transport';

@Component({
  selector: 'app-transport-list',
  templateUrl: './transport-list.component.html',
  styleUrls: ['./transport-list.component.css']
})
export class TransportListComponent implements OnInit {

  allTransport: Transport[];

  constructor(private transService : TransportService) { }

  ngOnInit() {
    this.getAllTransport();
    this.transService.refreshNeeded$.subscribe(() => {
      this.getAllTransport();
    });
    this.getAllTransport();
  }

  getAllTransport() {
    this.transService.getAllTransport().subscribe((data: Transport[]) => {
      this.allTransport = data;
    });
  }

  deleteTransport(transdetid: number) {
    this.transService.deleteTransport(transdetid).subscribe((data: Transport) => {
      this.getAllTransport();
      alert("Do you want to delete...???");
    });
  }

  editTransport(transport: Transport) {
    this.transService.currentTransport = Object.assign({}, transport);
    
  }
}
