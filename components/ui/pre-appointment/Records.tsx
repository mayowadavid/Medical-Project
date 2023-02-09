import { useRef, useState } from "react";
import { Button, OutlinedButton } from "../core/Buttons";
import { FadedRegularText } from "../core/Text";
import { Camera, CameraResultType } from "@capacitor/camera";
import { dataURItoBlob } from "../../../lib/hooks/uriToImage";
import { FaFile, FaFilePdf } from "react-icons/fa";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";

interface RecordsProps {
  prevFunc: () => void;
  nextFunc: () => void;
}

const Records = ({ prevFunc, nextFunc }: RecordsProps) => {
  const [addDetails, setAddDetails] = useState(false);
  const [selectedRecords, setSelectedRecords] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const fileRef = useRef(null);

  const addRecord = (record: string) => {
    setSelectedRecords((prev) => [...prev, record]);
  };

  const removeRecord = (record: string) => {
    setSelectedRecords(selectedRecords.filter((item) => item !== record));
  };

  const removeFile = (file: File) => {
    setSelectedFiles(selectedFiles.filter((item) => item !== file));
  };

  const handleFileChange = (file: File) => {
    setSelectedFiles((prev) => [...prev, file]);
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

  interface RecordProps {
    record?: string;
  }

  interface FileDivProps {
    file: File;
  }

  const Record = ({ record }: RecordProps) => {
    return (
      <div
        key={record}
        className="px-4 py-2 bg-primary-50 my-2 text-white rounded-md flex items-center justify-between"
      >
        <div className="pr-6">{record}</div>
        <span onClick={() => removeRecord(record)}>X</span>
      </div>
    );
  };

  const FileDiv = ({ file }: FileDivProps) => {
    return (
      <div className="px-4 py-2 bg-primary-50 my-2 text-white rounded-md flex items-center justify-between">
        <div>
          <div className="flex gap-4 items-center">
            {file.type.includes("image/") ? (
              <img
                src={URL.createObjectURL(file)}
                className="h-10 w-10"
                alt=""
              />
            ) : (
              getThumbnail(file.type)
            )}

            <div className="pr-10 overflow-hidden text-md font-semibold">
              {file.name}
            </div>
          </div>
          <div className="mt-2 flex items-center">
            <div className="mr-2">Save to</div>
            <select className="py-1 px-2 bg-gray-100 opacity-100 text-primary-100 focus:outline-none">
              <option>Lab Results</option>
              <option>Radiology</option>
              <option>Personal Records</option>
            </select>
          </div>
        </div>
        <span onClick={() => removeFile(file)}>X</span>
      </div>
    );
  };

  return (
    <div className="flex flex-col justify-between h-screen-90">
      <div>
        <FadedRegularText classes="mb-4">
          Would you like to show the doctor more information (e.g. photos of
          visible symptoms, lab reports) on your condition?
        </FadedRegularText>
        <div className="flex justify-between gap-4">
          {addDetails ? (
            <Button
              handleClick={() => {
                setAddDetails(true);
              }}
              full
              classes=""
            >
              Yes
            </Button>
          ) : (
            <OutlinedButton
              handleClick={() => {
                setAddDetails(true);
              }}
              full
              classes=""
            >
              Yes
            </OutlinedButton>
          )}

          {addDetails ? (
            <OutlinedButton
              handleClick={() => {
                setAddDetails(false);
              }}
              full
              classes=""
            >
              No
            </OutlinedButton>
          ) : (
            <Button
              handleClick={() => {
                setAddDetails(false);
              }}
              full
              classes=""
            >
              No
            </Button>
          )}
        </div>
        {addDetails && (
          <div>
            <div>
              <FadedRegularText classes="my-4">
                Choose existing record
              </FadedRegularText>
              <div className="flex justify-between">
                <select className="py-2 px-4 bg-secondary-100 opacity-60 focus:outline-none">
                  <option>Lab Results</option>
                  <option>Radiology</option>
                  <option>Personal Records</option>
                </select>
                <select
                  className="py-2 px-4 bg-secondary-100 opacity-60 focus:outline-none"
                  onChange={(e) => {
                    addRecord(e.currentTarget.value);
                  }}
                >
                  <option value="none" selected disabled hidden>
                    Select a Record
                  </option>
                  <option>sample record</option>
                  <option>example record</option>
                </select>
              </div>
            </div>
            <div className="my-4">
              {selectedRecords.map((record) => {
                return <Record record={record} key={record} />;
              })}
            </div>
            <div>
              <FadedRegularText classes="my-4">
                Upload new record
              </FadedRegularText>
              <div className="flex justify-between gap-4">
                <input
                  hidden
                  type="file"
                  ref={fileRef}
                  onChange={(e) => handleFileChange(e.currentTarget.files[0])}
                />
                <OutlinedButton
                  classes=""
                  full
                  handleClick={() => {
                    fileRef.current.click();
                  }}
                >
                  Upload
                </OutlinedButton>
                <OutlinedButton
                  classes=""
                  full
                  handleClick={() => {
                    takePicture();
                  }}
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
          </div>
        )}
      </div>
      <div className="flex">
        {prevFunc && (
          <Button
            handleClick={() => prevFunc()}
            classes="py-3 rounded-lg mr-3 !bg-blue-400 flex items-center justify-center"
            full
          >
            <HiArrowNarrowLeft size="20px" className="text-white mr-2" />
            Prev
          </Button>
        )}
        {nextFunc && (
          <Button
            handleClick={() => {
              nextFunc();
            }}
            classes="py-3 rounded-lg flex items-center justify-center"
            full
            primary
          >
            Next
            <HiArrowNarrowRight size="20px" className="text-white ml-2" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default Records;
