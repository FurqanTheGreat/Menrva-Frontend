import { useEffect, useMemo, useState } from "react";

interface DialogProps {
  showDialog: boolean;
  onDocumentSelect: (selectedDoc: string) => void;
}
const Dialog = (props: DialogProps) => {
  const [docs, setDocs] = useState([]);
  useEffect(() => {
    (async () => {
      const req = await fetch("http://localhost:8000/documents");
      const documents = await req.json();
      setDocs(documents["data"]);
    })();
  }, []);
  return (
    <div
      className={`fixed top-0 left-0 h-screen w-screen backdrop-blur-lg z-50 ${
        props.showDialog ? "" : "hidden"
      } flex items-center justify-center`}
    >
      <div
        className="bg-neutral-900 p-5 border border-neutral-800"
        style={{
          borderRadius: "5px",
        }}
      >
        <h1 className="text-2xl">Your Documents</h1>
        <hr />
        Following are some of the general publically available documents for
        users.
        <br />
        All documents here are tested and secure in all ways:
        <ul className="list-disc ml-5">
          {docs.map((value: string, key) => (
            <li
              key={key}
              onClick={(e) => {
                
                props.onDocumentSelect(value)
              }}
              className="bg-neutral-800 p-2 rounded-md m-2 cursor-pointer hover:bg-neutral-700 transition-all"
            >
              {value
                .replace("documents/", "")
                .replace(".pdf", "")
                .replaceAll("_", " ")}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dialog;
