export class Asset {
    assetId?: number;
    userId?: string;
    custodian?: string;
    accountNumber?: string;
    rateOfReturn?: string;
    taxStructure?: string;
    valuationDate?: string;
    maturityDate?: string;
    balance?: number;
    type?: string;
    bucket?: string;
    username?: string;
    assetName?: string;

    constructor(userId: string, assetId: number, custodian: string, accountNumber: string, rateOfReturn: string, taxStructure: string, valuationDate: string, maturityDate: string, balance: number, type: string, bucket: string, username: string, assetName: string)
    {
        this.userId = userId;
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
        this.assetName = assetName;
    }
}

export class Bucket{
    bucketId?: number;
    type?: string;
    bucket?: string;
    balance?: number;
    username? : string;
    constructor(bucketId: number, type: string, bucket: string, balance: number, username: string)
    {
        this.bucketId = bucketId;
        this.type = type;
        this.bucket = bucket;
        this.balance = balance;
        this.username = username;
    }
}
