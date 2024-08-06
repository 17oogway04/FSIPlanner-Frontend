export class Liabilities {
    liabilitiesId?: string;
    type?: string;
    description?: string;
    balance?: string;
    rate?: string;
    payment?: string;
    term?: string;
    value?: string;
    username?: string;

    constructor(liabilitiesId: string, type: string, description: string, balance: string, rate: string, payment: string, term: string, value: string, username: string)
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
