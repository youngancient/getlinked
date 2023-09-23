
interface ILink {
    href : string;
    name : string;
    id : number;
    isSelected : boolean;
}

export const Links : ILink[] = [
    {name : "Timeline", href : "/#timeline" , id : 0, isSelected : false},
    {name : "Overview", href : "/#overview" , id : 1, isSelected : false},
    {name : "FAQs", href : "/#faq" , id : 2, isSelected : false},
    {name : "Contact", href : "/contact" , id : 3, isSelected : false},
]

interface ILinkB {
    href : string;
    name : string;
    id : number;
}
export const FooterLinks : ILinkB[] = [
    {name : "Overview", href : "/#overview" , id : 1},
    {name : "Timeline", href : "/#timeline" , id : 0},
    {name : "FAQs", href : "/#faq" , id : 2},
    {name : "Contact", href : "/contact" , id : 3},
    {name : "Register", href : "/auth/register" , id : 4}
]