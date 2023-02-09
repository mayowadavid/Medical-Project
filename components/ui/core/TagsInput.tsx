import React, { Dispatch, SetStateAction } from "react";
import { Button } from "./Buttons";
import { AiOutlinePlus } from "react-icons/ai";
import FormInput from "./FormInput";

interface TagsInputProps {
  tagsList: string[];
  setTagsList: Dispatch<SetStateAction<string[]>>;
  tagText: string;
  setTagText: Dispatch<SetStateAction<string>>;
  inputClasses?: string;
  placeholder?: string;
}

const TagsInput = ({
  tagsList,
  setTagsList,
  tagText,
  setTagText,
  inputClasses,
  placeholder,
}: TagsInputProps) => {
  return (
    <div className="w-full flex flex-col">
      {tagsList && tagsList.length > 0 && (
        <div className="w-full drop-shadow shadow-inner px-2 py-2.5 rounded-lg border border-back text-light text-base min-h-[100px] mb-2 flex flex-wrap">
          {tagsList.map((tag, idx) => (
            <div
              className="bg-secondary-100 drop-shadow px-2 py-1 rounded-lg h-max mr-2 mb-2 flex items-center justify-center last:mr-0 break-all"
              key={idx}
            >
              {tag}
              <AiOutlinePlus
                size="16px"
                className="ml-3 rotate-45"
                onClick={() => {
                  setTagsList(tagsList.filter((t) => tag != t));
                }}
              />
            </div>
          ))}
        </div>
      )}
      <div className="flex items-center">
        <FormInput
          inputState={tagText}
          setInputState={setTagText}
          placeholder={placeholder}
          inputClasses={inputClasses}
        />
        <Button
          classes="w-1/4 h-full ml-2 flex items-center justify-center !px-2"
          handleClick={() => {
            if (
              !tagsList.includes(tagText) &&
              tagText != "" &&
              tagText &&
              tagText.trim().length !== 0
            )
              setTagsList([...tagsList, tagText]);
            setTagText("");
          }}
        >
          <AiOutlinePlus size="20px" className="mr-2 text-white" />
          Add
        </Button>
      </div>
    </div>
  );
};

export default TagsInput;
