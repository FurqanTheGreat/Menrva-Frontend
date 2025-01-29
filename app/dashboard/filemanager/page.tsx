"use client";
import { FileUpload } from "@/components/ui/file-upload";
import { useCallback, useState, useEffect } from "react";
import { MultiStepLoader as Loader } from "@/components/ui/multi-step-loader";

const File = () => {
  const [isLoading, setLoading] = useState(false);

  const initFormData = useCallback((file: File) => {
    const fileFormInput = new FormData();
    fileFormInput.append("file", file);
    return fileFormInput;
  }, []);

  const onFileUpload = useCallback((files: File[]) => {
    if (files.length === 0) return; // Prevents errors if no files are selected

    const formData = initFormData(files[0]); // Use the first file
    setLoading(true);

    fetch('https://bee-national-rationally.ngrok-free.app/uploadpdf', {
      headers: {
        'ngrok-skip-browser-warning': 'true'
      },
      method: "POST",
      body: formData
    })
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        console.log(data);
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error uploading file:", error);
      });
  }, [initFormData]);

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Loader loading={isLoading} loadingStates={[
        { text: "Selecting Chunk..." },
        { text: "Testing Chunk Health..." },
        { text: "Embedding Documents 1-96..." },
        { text: "Uploading Documents to Pinecone..." },
        { text: "Preparing document for querying..." },
      ]} />
      <FileUpload onChange={onFileUpload} />
    </div>
  );
};

export default File;
