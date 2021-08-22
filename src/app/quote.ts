export class Quote {
    showVotes:boolean;
    constructor(
        public id: number, 
        public author: string, 
        public createdBy:string,
        public statement: string, 
        public createdAt: Date,
        public likes: number = 0,
        public dislikes: number = 0
        ) {
        this.showVotes=false;
    }
}
