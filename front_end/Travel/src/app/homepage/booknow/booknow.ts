export class Booknow{
    bookingid: number;
    custid: number;
    tpackid: number;
    tourstart: string;
    tourend: string;
    totalperson: number;
    bookingdate: Date;

    constructor(tourstart, tourend, totalperson, bookingdate){
        // this.bookingid = null,
        this.tourstart = "",
        this.tourend = "",
        this.totalperson = null,
        this.bookingdate = new Date
    }
}