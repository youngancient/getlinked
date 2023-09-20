
interface ILink {
    href : string;
    name : string;
    id : number;
    isSelected : boolean;
}

export const Links : ILink[] = [
    {name : "Timeline", href : "#" , id : 0, isSelected : true},
    {name : "Overview", href : "#overview" , id : 1, isSelected : false},
    {name : "FAQs", href : "#faq" , id : 2, isSelected : false},
    {name : "Contact", href : "/contact" , id : 3, isSelected : false},
]