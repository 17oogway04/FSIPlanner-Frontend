export class Notes {
    notesId?: string;
    subject?: string;
    username?: string;
    description?: string;
    createdAt?: string;

    constructor(notesId: string, subject: string, username: string, description: string, createdAt: string){
        this.notesId = notesId;
        this.subject = subject;
        this.username = username;
        this.description = description;
        this.createdAt = createdAt;
    }
}
