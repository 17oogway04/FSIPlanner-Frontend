export class Life {
    lifeId?: number;
    policyName?: string;
    policyType?: string;
    owner?: string;
    insured?: string;
    premium?: string;
    cashValue?: number;
    deathBenefitOne?: string;
    deathBenefitTwo?: string;
    riders?: string;
    ridersBenefit?: string;
    percentageToSavings?: string;
    username?: string;

    constructor(lifeId: number, policyName: string, policyType: string, owner: string, insured: string, premium: string, cashValue: number, deathBenefitOne: string, deathBenefitTwo: string, riders: string, ridersBenefit: string, percentageToSavings: string, username: string )
    {
        this.lifeId = lifeId;
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
