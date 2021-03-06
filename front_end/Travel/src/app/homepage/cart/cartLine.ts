import { Hotel } from 'src/app/Admin/hotel/hotel';

export class CartLine{
       
      constructor(public hotel: Hotel,
                  public quantity: number,
                  public totalDays: number,
                  public defaultFrom: string,
                  public defaultTo: string,
                  public tperson: number
         ){this.defaultFrom = "MM-dd-yyyy";
         this.defaultTo = "MM-dd-yyyy";
         this.totalDays = 1;
         this.tperson = 1;
         this.quantity = 1;
        //  this.parseDates(this.defaultFrom, this.defaultTo);
         }
  
         public parseDates(fromValue: string, toValue: string): void{
                let fromMs = Date.parse(fromValue);
                let toMs = Date.parse(toValue);
                if( fromMs > toMs){
                  console.log("Invalid date range");
                }
                this.totalDays = ((toMs - fromMs) / 1000/ 60/ 60/ 24);
              }   
  
      get lineTotal(){
             return (this.quantity * this.totalDays) * this.hotel.rent ;
      }

      // get hotelId(){
      //   return this.hotel.hdetid;
      // }
  }