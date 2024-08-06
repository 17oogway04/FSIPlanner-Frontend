export class Asset {
    assetId?: string;
    custodian?: string;
    accountNumber?: string;
    rateOfReturn?: string;
    taxStructure?: string;
    valuationDate?: string;
    maturityDate?: string;
    balance?: string;
    type?: string;
    bucket?: string;
    username?: string;

    constructor(assetId: string, custodian: string, accountNumber: string, rateOfReturn: string, taxStructure: string, valuationDate: string, maturityDate: string, balance: string, type: string, bucket: string, username: string)
    {
        this.assetId = assetId;
        this.custodian = custodian;
        this.accountNumber = accountNumber;
        this.rateOfReturn = rateOfReturn;
        this.taxStructure = taxStructure;
        this.valuationDate = valuationDate;
        this.maturityDate = maturityDate;
        this.balance = balance;
        this.type = type;
        this.bucket = bucket;
        this.username = username;
    }
}

export class Bucket{
    bucketId?: string;
    type?: string;
    bucket?: string;
    balance?: string;

    constructor(bucketId: string, type: string, bucket: string, balance: string)
    {
        this.bucketId = bucketId;
        this.type = type;
        this.bucket = bucket;
        this.balance = balance;
    }
}
