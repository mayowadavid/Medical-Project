import { IonContent, IonPage } from "@ionic/react";
import { useEffect, useState } from "react";
import ArticleCard from "../../ui/articles/ArticleCard";
import CategoriesMobile from "../../ui/articles/CategoriesMobile";
import Container from "../../ui/layouts/Container";
import { TopHeader } from "../../ui/layouts/Headers";
import LoadingProvider from "../../loading-provider";

const ArticlePage = () => {
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
  }, []);

  return (
    <IonPage>
      <LoadingProvider>
        <TopHeader pageName={"Articles"} back />
        <IonContent>
          <Container>
            <section className="md:flex mt-6 justify-between">
              <CategoriesMobile />
              <div className="container py-5 mx-auto">
                <h1 className="font-title text-typo text-xl font-semibold mb-6">
                  All{" "}
                </h1>
                <div className="article-grid mb-12">
                  {articles.map((article, index) => (
                    <ArticleCard
                      key={index}
                      title={article.title}
                      imageUrl={article.image}
                      content={article.summary}
                      date={article.datePublished}
                      href={`/articles/${article.articleRoute?.replace(
                        ".md",
                        ""
                      )}`}
                      tags={article.tags}
                    />
                  ))}
                </div>
              </div>
            </section>
          </Container>
        </IonContent>
      </LoadingProvider>
    </IonPage>
  );
};

export default ArticlePage;
