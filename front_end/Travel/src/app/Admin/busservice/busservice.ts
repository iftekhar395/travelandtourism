export class Bus{
    busid: number;
    busname: string;
    start: string;
    end: string;
    fare: number;
    status: string;
    transdetid: number;

    constructor(busname, fare, transdetid){
        this.busname = '',
        this.fare = null,
        this.transdetid = null
    }
}