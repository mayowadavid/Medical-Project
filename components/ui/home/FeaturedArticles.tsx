import { useState, useEffect } from "react";
import ArticleCard from "../articles/ArticleCard";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const FeaturedArticles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("/api/articles");
        const result = await response.json();
        setArticles(result);
      } catch (err) {
        throw err;
      }
    })();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="mb-4 font-general">
      <div className="font-title text-sectionHead mb-2 py-2 px-4">
        Featured Articles
      </div>
      <div className="flex w-full overflow-x-auto snap-x md:justify-between pb-4 pl-4 gap-3">
        {articles.map((article, index) => {
          if (index < 4)
            return (
              <ArticleCard
                key={index}
                title={article.title}
                imageUrl={article.image}
                content={article.summary}
                date={article.datePublished}
                href={`/articles/${article.articleRoute?.replace(".md", "")}`}
                tags={article.tags}
              />
            );
        })}

        <Link to="/articles">
          <div className="h-full flex flex-col items-center justify-center self-center ml-4 mr-8 w-40 text-typo">
            <span className="px-4 mb-2">
              <BsFillArrowRightCircleFill size="40px" color="#FF6B35" />
            </span>
            View All
          </div>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedArticles;
