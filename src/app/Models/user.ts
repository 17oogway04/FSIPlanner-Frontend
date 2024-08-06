export class User {
    userId?: string;
    firstName?: string;
    lastName?: string;
    userName?: string;
    password?: string;
    profilePicture?: string;

    constructor(userId: string, firstName: string, lastName: string, userName: string, password: string, profilePicture: string){
        this.userId = userId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.userName = userName;
        this.password = password;
        this.profilePicture = profilePicture;
    }
}
