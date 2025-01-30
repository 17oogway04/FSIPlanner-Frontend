export class Demographics {
    demographicsId?: number;
    userId?: string;
    spouse?: string;
    spouseEmail?: string;
    c1?: string;
    c2?: string;
    c3?: string;
    c4?: string;
    socialSecurity?: string;
    driversLicense?: string;
    issueDate?: string;
    expirationDate?: string;
    gender?: string;
    maritalStatus?: string;
    employer?: string;
    occupation?: string;
    workPhone?: string;
    address?: string;
    phoneNumber?: string;
    email?: string;
    birthday?: string;
    username?: string;

    constructor(demographicsId: number,userId: string, spouse: string, spouseEmail: string, c1: string, c2: string, c3: string, c4: string, socialSecurity: string, driversLicense: string, issueDate: string, expirationDate: string, gender: string, maritalStatus: string, employer: string, occupation: string, workPhone: string, address: string, phoneNumber: string, email: string, birthday: string, username: string)
    {
        this.demographicsId = demographicsId;
        this.userId = userId;
        this.spouse = spouse;
        this.spouseEmail = spouseEmail;
        this.c1 = c1;
        this.c2 = c2;
        this.c3 = c3;
        this.c4 = c4;
        this.socialSecurity = socialSecurity;
        this.driversLicense = driversLicense;
        this.issueDate = issueDate;
        this.expirationDate = expirationDate;
        this.gender = gender;
        this.maritalStatus = maritalStatus;
        this.employer = employer;
        this.email = email;
        this.occupation = occupation;
        this.workPhone = workPhone;
        this.address = address;
        this.birthday = birthday;
        this.username = username;
        this.phoneNumber = phoneNumber;
    }
}
