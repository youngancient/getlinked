export interface IAccordionComponent {
    id : number;
  question: string;
  answer: string;
  show: boolean;
}

export const FAQs: IAccordionComponent[] = [
  {
    id : 0,
    question: "Can I work on a project I started before the hackathon?",
    answer: "Yes, you can typically work on a project you started before the hackathon. However, it's important to check the specific rules and guidelines of the hackathon you're participating in, as some events may have restrictions or requirements regarding pre-existing projects.",
    show: false,
  },
  {
    id : 1,
    question: "What happens if I need help during the hackathon?",
    answer:
      "During the hackathon, you can seek help from mentors, organizers, or fellow participants. There are often designated channels or support systems, such as mentorship sessions or online forums, where you can ask questions and get assistance with technical or project-related issues.",
    show: false,
  },
  {
    id : 2,
    question: "What happens if I don't have an idea for a project?",
    answer: "If you don't have an idea for a project, you can often join a team that has an idea you're interested in, or you can brainstorm and collaborate with other participants to come up with a project concept. Many hackathons encourage teamwork and creativity, so don't hesitate to reach out to others for collaboration.",
    show: false,
  },
  {
    id : 3,
    question: "Can I join a team or do I have to come with one?",
    answer: "Most hackathons allow both individuals and teams to participate. You can typically join a team at the hackathon itself, and organizers may help match participants who are looking for team members. Some hackathons also have specific team size limits, so be sure to check the event's guidelines.",
    show: false,
  },
  {
    id : 4,
    question: "What happens after the hackathon ends",
    answer: "After the hackathon concludes, there will be the following: project presentation, networking sessions, continued project development and community engagement.",
    show: false,
  },
  {
    id : 5,
    question: "Can I work on a project I started before the hackathon?",
    answer: "Yes, you can typically work on a project you started before the hackathon. However, it's important to check the specific rules and guidelines of the hackathon you're participating in, as some events may have restrictions or requirements regarding pre-existing projects.",
    show: false,
  },
];
