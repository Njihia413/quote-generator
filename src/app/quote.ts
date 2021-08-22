export class Quote {
    showVotes:boolean;
    likes!: number;
    dislikes!: number;
    constructor(public id: number, public statement: string, public author: string, public createdBy:string) {
        this.showVotes=false;
    }
}
