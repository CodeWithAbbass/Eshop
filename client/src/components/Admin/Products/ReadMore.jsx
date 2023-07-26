import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <p className="mb-0 FS_13 DCLC_AllCat_Body_Description">
      {isReadMore ? text?.slice(0, 30) : text}
      {text?.length > 30 && (
        <Link onClick={toggleReadMore} className="READMore">
          {isReadMore ? "...Read more" : " Read less"}
        </Link>
      )}
    </p>
  );
};

const Content = ({ Description }) => {
  return <ReadMore>{Description}</ReadMore>;
};

export default Content;
