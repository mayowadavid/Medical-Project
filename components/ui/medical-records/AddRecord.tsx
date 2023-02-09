import { FadedRegularText } from "../core/Text";
import { Button, OutlinedButton } from "../core/Buttons";
import { useRef, useState } from "react";
import { Camera, CameraResultType } from "@capacitor/camera";
import React from "react";
import { dataURItoBlob } from "../../../lib/hooks/uriToImage";
import { FaFile, FaFilePdf } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import useModal from "../../../lib/hooks/useModal";

interface AddRecordProps {
  type: string;
}

const AddRecord = ({ type }: AddRecordProps) => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const fileRef = useRef(null);
  const { closeModal } = useModal();

  const removeFile = (file: File) => {
    setSelectedFiles(selectedFiles.filter((item) => item !== file));
  };

  const handleFileChange = (file: File) => {
    setSelectedFiles((prev) => [...prev, file]);
    console.log(file);
  };

  const takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.DataUrl,
    });
    const imageFile = new File([dataURItoBlob(image.dataUrl)], "image.jpg", {
      type: "image/jpeg",
    });
    setSelectedFiles((prev) => [...prev, imageFile]);
  };

  const getThumbnail = (type: string) => {
    switch (type) {
      case "application/pdf":
        return <FaFilePdf size={40} />;
      default:
        return <FaFile size={40} />;
    }
  };

  interface FileDivProps {
    file: File;
  }

  const FileDiv = ({ file }: FileDivProps) => {
    return (
      <div className="px-4 py-2 bg-primary-50 my-2 text-white rounded-md flex items-center justify-between">
        <div>
          <div className="flex gap-4 items-center">
            {file.type.includes("image/") ? (
              <img
                src={URL.createObjectURL(file)}
                className="h-12 w-12 object-cover rounded"
                alt={file.name}
              />
            ) : (
              getThumbnail(file.type)
            )}

            <div className="pr-10 overflow-hidden text-md font-semibold">
              {file.name}
            </div>
          </div>
        </div>
        <span onClick={() => removeFile(file)}>
          <CgClose size={20} />
        </span>
      </div>
    );
  };

  return (
    <div className="flex flex-col justify-between h-[88vh] px-2">
      <div>
        <FadedRegularText classes="mb-1">
          Add <span className="font-bold">{type}</span> record:
        </FadedRegularText>
        <div className="flex justify-between gap-4">
          <input
            hidden
            type="file"
            ref={fileRef}
            onChange={(e) => handleFileChange(e.currentTarget.files[0])}
          />
          <OutlinedButton
            classes="w-full font-semibold py-2 px-4 rounded mr-2"
            handleClick={() => fileRef.current.click()}
          >
            Upload
          </OutlinedButton>
          <OutlinedButton
            classes="w-full font-semibold py-2 px-4 rounded ml-2"
            handleClick={() => takePicture()}
          >
            Take Photo
          </OutlinedButton>
        </div>
        <div className="my-4">
          {selectedFiles.map((file, idx) => {
            return <FileDiv file={file} key={idx} />;
          })}
        </div>
      </div>
      <div className="flex">
        <Button
          handleClick={() => closeModal()}
          classes="py-3 rounded flex items-center justify-center"
          full
        >
          Save
        </Button>
      </div>
    </div>
  );
};

export default AddRecord;
