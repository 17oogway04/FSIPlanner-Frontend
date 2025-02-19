export class Notes {
    notesId?: number;
    userId?: string;
    subject?: string;
    username?: string;
    description?: string;
    createdAt?: string;

    constructor(userId: string,notesId: number, subject: string, username: string, description: string, createdAt: string){
        this.userId = userId;
        this.notesId = notesId;
        this.subject = subject;
        this.username = username;
        this.description = description;
        this.createdAt = createdAt;
    }
}
