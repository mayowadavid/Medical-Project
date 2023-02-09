/* eslint-disable @next/next/no-img-element */
import { Link } from "react-router-dom";
import formatDate from "../../../lib/hooks/formatDate";

interface ArticleCardProps {
  title: string;
  date: string;
  imageUrl: string;
  content: string;
  tags: string[];
  href?: string;
}

const ArticleCard = ({
  title,
  date,
  imageUrl,
  content,
  tags,
  href = "#",
}: ArticleCardProps) => {
  return (
    <Link to={href}>
      <div className="mr-3 border rounded-xl shadow-lg overflow-hidden cursor-pointer scroll-smooth w-full flex-col min-w-[320px] h-[440px]">
        <div className="overflow-hidden flex items-center justify-center mt-1">
          <img
            src={imageUrl}
            alt="article"
            className="object-cover hover:scale-105 transition-all duration-300 h-56 w-80 rounded-xl"
          />
        </div>
        <div className="p-2.5 flex flex-col justify-between">
          <div className="font-general flex-1 text-sm">{formatDate(date)}</div>
          <div className="font-title font-medium h-12">{title}</div>
          <div className="excerpt">{content}</div>
          <div className="flex w-full flex-wrap">
            {tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="inline-block bg-blue-400 font-title font-bold text-white mt-2 mr-3 rounded py-1 px-2 text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
