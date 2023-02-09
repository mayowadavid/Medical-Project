import React, { useState } from "react";
import { BsBookmarkDash, BsFillBookmarkFill } from "react-icons/bs";

const Bookmark = ({ marked }) => {
  const [bookmark, setBookmark] = useState(marked);
  return (
    <div>
      <button
        onClick={() => {
          setBookmark(!bookmark);
        }}
      >
        {bookmark ? (
          <BsFillBookmarkFill className=" text-primary-100" size="1.4rem" />
        ) : (
          <BsBookmarkDash className=" text-primary-100" size="1.4rem" />
        )}
      </button>
    </div>
  );
};

export default Bookmark;
