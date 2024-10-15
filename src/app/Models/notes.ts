export class Notes {
    notesId?: number;
    subject?: string;
    username?: string;
    description?: string;
    createdAt?: string;

    constructor(notesId: number, subject: string, username: string, description: string, createdAt: string){
        this.notesId = notesId;
        this.subject = subject;
        this.username = username;
        this.description = description;
        this.createdAt = createdAt;
    }
}
