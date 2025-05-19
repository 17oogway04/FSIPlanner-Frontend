export class Liabilities {
    liabilitiesId?: number;
    userId?: string;
    type?: string;
    description?: string;
    balance?: number;
    rate?: string;
    payment?: string;
    term?: string;
    value?: number;
    username?: string;

    constructor(userId: string, liabilitiesId: number, type: string, description: string, balance: number, rate: string, payment: string, term: string, value: number, username: string)
    {
        this.userId = userId;
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
