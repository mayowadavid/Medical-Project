import ArticleCard from "./ArticleCard";

interface ArticlesSectionProps {
  articles: any;
  title: string;
}

const ArticlesSection = ({ title, articles }: ArticlesSectionProps) => {
  return (
    <section>
      <div className="container py-5 mx-auto">
        <h1 className="font-title text-typo text-xl font-semibold mb-6">
          {title}
        </h1>
        <div className="article-grid">
          {articles.map((article, index) => (
            <ArticleCard
              key={index}
              title={article.title}
              imageUrl={article.image}
              content={article.summary}
              date={article.datePublished}
              href={`/articles/${article?.articleRoute?.replace(".md", "")}`}
              tags={article.tags}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;
