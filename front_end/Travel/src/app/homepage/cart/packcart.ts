import { Pack } from 'src/app/Admin/package/packag';

export class Packcart{
    constructor(
        public pack: Pack,
        public quantity: number,
        public defaultFrom: string,
        public defaultTo: string,
        public tperson: number
){this.defaultFrom = "MM-dd-yyyy";
this.defaultTo = "MM-dd-yyyy";
this.quantity = 1;
}
get lineTotal(){
    return this.quantity * this.pack.tpackfare ;
}
}