export class Demographics {
    demographicsId?: string;
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

    constructor(demographicsId: string, socialSecurity: string, driversLicense: string, issueDate: string, expirationDate: string, gender: string, maritalStatus: string, employer: string, occupation: string, workPhone: string, address: string, phoneNumber: string, email: string, birthday: string, username: string)
    {
        this.demographicsId = demographicsId;
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
    }
}
