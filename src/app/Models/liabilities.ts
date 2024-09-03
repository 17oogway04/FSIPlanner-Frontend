export class Liabilities {
    liabilitiesId?: number;
    type?: string;
    description?: string;
    balance?: number;
    rate?: string;
    payment?: string;
    term?: string;
    value?: string;
    username?: string;

    constructor(liabilitiesId: number, type: string, description: string, balance: number, rate: string, payment: string, term: string, value: string, username: string)
    {
        this.liabilitiesId = liabilitiesId;
        this.type = type;
        this.description = description;
        this.balance = balance;
        this.rate = rate;
        this.payment = payment;
        this.term = term;
        this.value = value;
        this.username = username;
    }
}
