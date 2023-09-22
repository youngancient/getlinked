
interface IMedal{
    id : string;
    prize : number;
    medalImg : string;
}

export const Medals:IMedal[] = [
    {id : "2nd", prize : 300000 , medalImg : "/assets/silver.svg"},
    {id : "1st", prize : 400000 , medalImg : "/assets/gold.svg"},
    {id : "3rd", prize : 150000 , medalImg : "/assets/bronze.svg"},
]