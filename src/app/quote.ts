export class Quote {
    showVotes:boolean;
    constructor(public id: number, public author: string, public statement: string, public createdBy:string) {
        this.showVotes=false;
    }
}
