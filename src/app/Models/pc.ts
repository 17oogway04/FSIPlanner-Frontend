export class PC {
    pcId?: string;
    companyName?: string;
    policyType?: string;
    premium?: string;
    expirationDate?: string;
    deductible?: string;
    liabilityLimit?: string;
    username?: string;

    constructor(pcId: string, companyName: string, policyType: string, premium: string, expirationDate: string, deductible: string, liabilityLimit: string, username: string){
        this.pcId = pcId;
        this.companyName = companyName;
        this.policyType = policyType;
        this.premium = premium;
        this.expirationDate = expirationDate;
        this.deductible = deductible;
        this.liabilityLimit = liabilityLimit;
        this.username = username;
    }
}
