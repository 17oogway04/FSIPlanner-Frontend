
export class AcctMovement {
    acctMovementId?: number;
    fullOrPartial?: string;
    companyFrom?: string;
    companyTo?: string;
    dollarAmt?: number;
    date?: string;
    username?: string;
    userId?: string;

    constructor(acctMovementId: number, fullOrPartial: string, companyFrom: string, companyTo: string, dollarAmt: number, date: string, username: string, userId: string )
    {
        this.acctMovementId = acctMovementId;
        this.fullOrPartial = fullOrPartial;
        this.companyFrom = companyFrom;
        this.companyTo = companyTo;
        this.dollarAmt = dollarAmt;
        this.date = date;
        this.username = username;
        this.userId = userId;
    }


}
