export class User {
    id?: string;
    username?: string;
    firstName?: string;
    lastName?: string;
    profilePicture?: string;
    // Make sure this matches with the actual API response if needed


    constructor(
        id: string,
        username: string,
        firstName: string,
        lastName: string,
        profilePicture: string,
    ) {
        this.username = username
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;

        this.profilePicture = profilePicture;
    }
}
