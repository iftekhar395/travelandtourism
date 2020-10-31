import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-report',
  templateUrl: './order-report.component.html',
  styleUrls: ['./order-report.component.css']
})
export class OrderReportComponent implements OnInit {

  title: string="";
  src = ""; 
  constructor() { }

  ngOnInit(): void {
  }

  generateAllpurchaseReport(){
    this.src = "http://localhost:8080/traveltourism/reportview/"+this.title;
 }
}
