export interface Bug {
    
    id: string;

    name: string;

    price: number;

    url: string;

}


export interface BugResolved{
    bug: Bug;
    error?: any;
}