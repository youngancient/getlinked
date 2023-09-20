export interface JudgingCriterion {
  head: string;
  body: string;
}

export const JudgingCriteria: JudgingCriterion[] = [
  {
    head: "Innovation and Creativity",
    body: "Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features.",
  },
  {
    head: "Functionality",
    body: "Assess how well the solution works. Does it perform its intended functions effectively and without major issues? Judges would consider the completeness and robustness of the solution.",
  },
  {
    head: "Impact and Relevance",
    body: "Determine the potential impact of the solution in the real world. Does it address a significant problem, and is it relevant to the target audience? Judges would assess the potential social, economic, or environmental benefits.",
  },
  {
    head: "Technical Complexity",
    body: "Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use of advanced technologies or algorithms, and the scalability of the solution.",
  },
  {
    head: "Adherence to Hackathon Rules",
    body: "Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements.",
  },
];
