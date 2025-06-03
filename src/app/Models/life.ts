export class Life {
    lifeId?: number;
    userId?: string;
    policyName?: string;
    policyType?: string;
    owner?: string;
    insured?: string;
    premium?: number;
    cashValue?: number;
    deathBenefitOne?: number;
    deathBenefitTwo?: number;
    riders?: string;
    ridersBenefit?: number;
    percentageToSavings?: number;
    username?: string;

    constructor(lifeId: number, userId: string, policyName: string, policyType: string, owner: string, insured: string, premium: number, cashValue: number, deathBenefitOne: number, deathBenefitTwo: number, riders: string, ridersBenefit: number, percentageToSavings: number, username: string )
    {
        this.lifeId = lifeId;
        this.userId = userId;
        this.policyName = policyName; 
        this.policyType = policyType;
        this.owner = owner;
        this.insured = insured;
        this.premium = premium;
        this.cashValue = cashValue;
        this.deathBenefitOne = deathBenefitOne;
        this.deathBenefitTwo = deathBenefitTwo;
        this.riders = riders;
        this.ridersBenefit = ridersBenefit;
        this.percentageToSavings = percentageToSavings;
        this.username = username;
    }
}
