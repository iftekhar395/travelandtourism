import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  title: string="";
  custid: string = "";
  src = ""; 
  src1 = "";
  constructor() { }

  ngOnInit(): void {
  }

  generateAllpurchaseReport(){
    this.src = "http://localhost:8080/traveltourism/reportView/"+this.title;
 }

 generateIndividualPaymentReport(){
  this.src1 = "http://localhost:8080/traveltourism/payment/reportView/"+this.custid;
}

clear(){
  this.title = "";
  this.custid = "";
}
}
