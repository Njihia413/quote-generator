export class Quote {
    showVotes:boolean;
    constructor(public id: number, public statement: string, public author: string, public createdBy:string) {
        this.showVotes=false;
    }
}
