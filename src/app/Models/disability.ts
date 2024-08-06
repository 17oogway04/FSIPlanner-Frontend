export class Disability {
    disabilityInsId?: string;
    policyName?: string;
    policyType?: string;
    owner?: string;
    insured?: string;
    premium?: string;
    cashValue?: string;
    monthlyDeathBenefitOne?: string;
    monthlyDeathBenefitTwo?: string;
    riders?: string;
    ridersBenefit?: string;
    eliminationPeriod?: string;
    benefitPeriod?: string;
    username?: string;

    constructor(disabilityInsId: string, policyName: string, policyType: string, owner: string, insured: string, premium: string, cashValue: string, monthlyDeathBenefitOne: string, monthlyDeathBenefitTwo: string, riders: string, ridersBenfit: string, eliminationPeriod: string, benefitPeriod: string, username: string)
    {
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
