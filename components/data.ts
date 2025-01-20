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

export { QUERY_LOADING_STATES, DOCUMENT_LOADING_STATES };
