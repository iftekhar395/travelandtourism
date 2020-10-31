import { Injectable } from '@angular/core';
import { Hotel } from 'src/app/Admin/hotel/hotel';
import { CartLine } from './cartLine';
import { Pack } from 'src/app/Admin/package/packag';
import { Packcart } from './packcart';
import { Bus } from 'src/app/Admin/busservice/busservice';
import { Transportcart } from './transportcart';

@Injectable()
export class Cart{
       public lines: CartLine[] =[];
       public pckg: Packcart[] =[];
       public tcart: Transportcart[] =[];
       public itemCount: number = 0;
       public cartPrice: number = 0;
       public quantity: number = 1;
       public defaultFrom: string = "";
       public defaultTo: string = "";
       public tperson: number = 1;

addLine(hotel: Hotel, quantity: number = 1, totalDays: number = 1){
       let line = this.lines.find(line => line.hotel.hdetid == hotel.hdetid);
       if(line != undefined ){
              line.quantity += quantity;
              line.totalDays += totalDays;
       }else{
              this.lines.push(new CartLine(hotel, quantity, totalDays, this.defaultFrom, this.defaultTo, this.tperson));
       }
       this.recalculate();
       console.log(this.lines);
}

addLine2(pack: Pack, quantity: number = 1){
       let line1 = this.pckg.find(line1 => line1.pack.tpackid == pack.tpackid);
       if(line1 != undefined ){
              line1.quantity += quantity;
       }else{
              this.pckg.push(new Packcart(pack ,quantity, this.defaultFrom, this.defaultTo, this.tperson));
       }
       this.recalculate();
       console.log(this.pckg);
}

addLine3(bus: Bus, quantity: number = 1, totalDays: number = 1){
       let line = this.tcart.find(line => line.bd.busid == bus.busid);
       if(line != undefined ){
              line.quantity += quantity;
              line.totalDays += totalDays;
       }else{
              this.tcart.push(new Transportcart(bus, quantity, totalDays, this.defaultFrom, this.defaultTo, this.tperson));
       }
       this.recalculate();
       console.log(this.lines);
}

addLine4(bus: Bus, quantity: number = 1, totalDays: number = 1){
       let line = this.tcart.find(line => line.bd.busid == bus.busid);
       if(line != undefined ){
              line.quantity += quantity;
              line.totalDays += totalDays;
       }else{
              this.tcart.push(new Transportcart(bus, quantity, totalDays, this.defaultFrom, this.defaultTo, this.tperson));
       }
       this.recalculate();
       console.log(this.tcart);
}

updateQuantity(hotel: Hotel, quantity: number){
       let line = this.lines.find(line => line.hotel.hdetid == hotel.hdetid);
       if(line != undefined){
       line.quantity = Number(quantity); 
       }
       this.recalculate();
}

updatePackQuantity(hotel: Pack, quantity: number){
       let line = this.pckg.find(line => line.pack.tpackid == hotel.tpackid);
       if(line != undefined){
       line.quantity = Number(quantity); 
       }
       this.recalculate();
}

updateTransQuantity(bus: Bus, quantity: number){
       let line = this.tcart.find(line => line.bd.busid == bus.busid);
       if(line != undefined){
       line.quantity = Number(quantity); 
       }
       this.recalculate();
}

removeLine(id: number){
       let index = this.lines.findIndex(line=> line.hotel.hdetid == id);
       this.lines.splice(index, 1);
       this.recalculate();
}

removePackLine(id: number){
       let index = this.pckg.findIndex(line=> line.pack.tpackid == id);
       this.pckg.splice(index, 1);
       this.recalculate();
}


removeTransLine(id: number){
       let index = this.tcart.findIndex(line=> line.bd.busid == id);
       this.tcart.splice(index, 1);
       this.recalculate();
}

clear(){
       this.lines = [];
       this.pckg = [];
       this.tcart = [];
       this.itemCount = 0;
       this.cartPrice = 0;
}

private recalculate(){
       this.itemCount = 0;
       this.cartPrice = 0;
       this.lines.forEach(l => {
              this.itemCount += l.quantity;
              this.cartPrice += (l.quantity * l.hotel.rent * l.totalDays);
       });
       this.pckg.forEach(l=>{
              this.itemCount += l.quantity;
              this.cartPrice += (l.quantity*l.pack.tpackfare);
       });
       this.tcart.forEach(l => {
              this.itemCount += l.quantity;
              this.cartPrice += (l.quantity * l.bd.fare * l.totalDays);
       });
}

    
updateTotalDays(hotel: Hotel){
       let line = this.lines.find(line => line.hotel.hdetid == hotel.hdetid);
       if(line != undefined){
       // line.totalDays = Number(totalDays); 
       this.recalculate();
       }
}

   
updateTransTotalDays(bus: Bus){
       let line = this.tcart.find(line => line.bd.busid == bus.busid);
       if(line != undefined){
       this.recalculate();
       }
}

}

