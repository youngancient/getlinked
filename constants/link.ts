
interface ILink {
    href : string;
    name : string;
    id : number;
    isSelected : boolean;
}

export const Links : ILink[] = [
    {name : "Timeline", href : "#" , id : 0, isSelected : true},
    {name : "Overview", href : "#" , id : 1, isSelected : false},
    {name : "FAQs", href : "#" , id : 2, isSelected : false},
    {name : "Contact", href : "#" , id : 3, isSelected : false},
]