export class Notes {
    notesId?: number;
    subject?: string;
    username?: string;
    description?: string;
    createdAt?: Date;

    constructor(notesId: number, subject: string, username: string, description: string, createdAt: Date){
        this.notesId = notesId;
        this.subject = subject;
        this.username = username;
        this.description = description;
        this.createdAt = createdAt;
    }
}
