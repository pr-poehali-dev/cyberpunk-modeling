
import React from "react";

interface HashtagCloudProps {
  tags: string[];
}

const HashtagCloud: React.FC<HashtagCloudProps> = ({ tags }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {tags.map((tag, index) => (
        <span key={index} className="hashtag">
          #{tag}
        </span>
      ))}
    </div>
  );
};

export default HashtagCloud;
