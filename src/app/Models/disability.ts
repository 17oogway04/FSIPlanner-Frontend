export class Disability {
    disabilityInsId?: number;
    userId?: string;

    policyName?: string;
    policyType?: string;
    owner?: string;
    insured?: string;
    premium?: number;
    cashValue?: number;
    monthlyDeathBenefitOne?: number;
    monthlyDeathBenefitTwo?: number;
    riders?: string;
    ridersBenefit?: number;
    eliminationPeriod?: number;
    benefitPeriod?: number;
    username?: string;

    constructor(userId: string, disabilityInsId: number, policyName: string, policyType: string, owner: string, insured: string, premium: number, cashValue: number, monthlyDeathBenefitOne: number, monthlyDeathBenefitTwo: number, riders: string, ridersBenfit: number, eliminationPeriod: number, benefitPeriod: number, username: string)
    {
        this.userId = userId;
        this.disabilityInsId = disabilityInsId;
        this.policyName = policyName;
        this.policyType = policyType;
        this.owner = owner;
        this.insured = insured;
        this.premium = premium;
        this.cashValue = cashValue;
        this.monthlyDeathBenefitOne = monthlyDeathBenefitOne;
        this.monthlyDeathBenefitTwo = monthlyDeathBenefitTwo;
        this.riders = riders;
        this.ridersBenefit = ridersBenfit;
        this.eliminationPeriod = eliminationPeriod;
        this.benefitPeriod = benefitPeriod;
        this.username = username;
    }   
}
