"use client"
import { FileUpload } from "@/components/ui/file-upload";
import { useCallback, useState } from "react";
import { MultiStepLoader as Loader } from "@/components/ui/multi-step-loader";

const File = () => {
  const [isLoading, setLoading] = useState(false)
  const initFormData = useCallback((file: File) => {
    const fileFormInput = new FormData();
    fileFormInput.append("file", file);

    return fileFormInput;
  }, [])

  const onFileUpload = useCallback((f:File[]) => {
        const file = f!
        const formData = initFormData(file[0])
        setLoading(true)
        fetch('http://localhost:8000/uploadpdf', {
            method : "POST",
            body: formData
        }).then((v) =>  v.json()).then((v) => {
          setLoading(false)
          console.log(v)
        })
  }, [])
  return <div className="h-full flex flex-col items-center justify-center">
    
    <Loader loading={isLoading} loadingStates={[
      {text: "Selecting Chunk..."},
      {text: "Testing Chunk Health..."},
      {text: "Embedding Documents 1-96..."},
      {text: "Uploading Documents to Pinecone..."},
      {text: "Preparing document for querying..."},
    ]}/>
    <FileUpload onChange={onFileUpload}/>
  </div>
};

export default File;
