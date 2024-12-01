interface FooterTool {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}

interface InputAreaProps {
  placeholder: string;
  footerTools: FooterTool[];
}

/**
 * A molecule which renders the main prompt section of Menrva
 */

const InputArea = (props: InputAreaProps) => {
  return (
    <div className="bg-white mt-5 z-50 w-1/2 rounded-md">
      <textarea
        placeholder={props.placeholder}
        className="w-full rounded-md p-3 text-black placeholder:font-playfair font-playfair text-md outline-none resize-none"
      ></textarea>
      <div className="border-t border-gray-200 p-1 flex flex-row h-fit">
        {props.footerTools.map((tool, key) => (
          <span
            className="p-2 text-sm text-gray-400 hover:text-gray-500 cursor-pointer flex flex-row transition-all items-center select-none"
            onClick={tool.onClick}
            key={key}
          >
            {tool.icon} {tool.label}
          </span>
        ))}

      </div>
    </div>
  );
};

export default InputArea;
export type {
  FooterTool
}