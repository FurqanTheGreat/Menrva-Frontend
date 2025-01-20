interface LoadingState {
    text: string
}

type LoadingStates = LoadingState[]

const DOCUMENT_LOADING_STATES: LoadingStates = [
  {
    text: "Analyzing your question...",
  },
  {
    text: "Generating Query Keywords...",
  },
  {
    text: "Searching the Document...",
  },
  {
    text: "Finding relevent sections...",
  },
  {
    text: "Summarizing the content...",
  },
  {
    text: "Generating response...",
  },
  {
    text: "Consulting K-CAT...",
  },
  {
    text: "Consulting the AI model...",
  },
];

const QUERY_LOADING_STATES:LoadingStates = [
  {
    text: "Analyzing your question...",
  },
  {
    text: "Generating Query Keywords...",
  },
  {
    text: "Fetching the best answer...",
  },
  {
    text: "Connecting to the knowledge base...",
  },
  {
    text: "Preparing a response...",
  },
  {
    text: "Summarizing the content...",
  },
  {
    text: "Consulting K-CAT...",
  },
  {
    text: "Consulting the AI model...",
  },
  {
    text: "Generating helpful insights...",
  },
];


const INPUT_PLACEHOLDERS: string[] = [
  "Explain the significance of golgi bodies.",
  "What was the significance of the subcontinent in WW2.",
  "Would the british have ?",
  "Write a Javascript method to reverse a string",
  "How to assemble your own PC?",
];

export { QUERY_LOADING_STATES, DOCUMENT_LOADING_STATES, INPUT_PLACEHOLDERS };
