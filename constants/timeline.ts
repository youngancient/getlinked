

export interface ITimeline{
    head : string;
    desc : string;
    date : string;
    id : number;
}

export const Timelines:ITimeline[] =[
    {id : 1, head : "Hackathon Announcement", desc : "The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register", date : "November 18, 2023"},
    {id : 2, head : "Teams Registration begins", desc : "Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register", date : "November 18, 2023"},
    {id : 3, head : "Teams Registration ends", desc : "Interested Participants are no longer Allowed to register for the hackathon", date : "November 25, 2023"},
    {id : 4, head : "Announcement of the accepted teams and ideas", desc : "All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced", date : "December 7, 2023"},
    {id : 5, head : "Getlinked Hackathon 1.0 Offically Begins", desc : "Accepted teams can now proceed to build their ground breaking skill driven solutions", date : "December 14, 2023"},
    {id : 6, head : "Demo Day", desc : "Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day", date : "December 21, 2023"},
]
