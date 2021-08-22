export class Quote {
    showVotes:boolean;
    likes = 0;
    dislikes = 0;
    constructor(public id: number, public statement: string, public author: string, public createdBy:string) {
        this.showVotes=false;
    }
}
