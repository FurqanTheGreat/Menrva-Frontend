"use client";
interface Suggestion {
  label: string;
  text: string;
}
interface ChatSuggestionsProps {
  suggestions: Suggestion[];
  onSuggestionSelect: (s: Suggestion) => void;
}
const ChatSuggestions = (props: ChatSuggestionsProps) => {
  return (
    <div className="grid grid-cols-5 gap-5 place-items-center mt-10 cursor-pointer">
      {props.suggestions.map((suggestion, key) => (
        <div
          className="border border-zinc-400 rounded-md p-2 hover:border-zinc-300 z-50 transition-all"
          key={key}
          onClick={() => props.onSuggestionSelect(suggestion)}
        >
          <span className="block mb-5 text-zinc-400">{suggestion.label.length > 15 ? suggestion.label.slice(0, 11) + '...' : suggestion.label
            }</span>
          <p className="text-sm mb-5">{suggestion.text}</p>
        </div>
      ))}
    </div>
  );
};

export default ChatSuggestions;
export type { Suggestion };
