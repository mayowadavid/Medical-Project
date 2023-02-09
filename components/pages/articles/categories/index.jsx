import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  categories,
  categoryNames,
} from "../../../../lib/constants/categoryNames";
import formatTitle from "../../../../lib/hooks/formatTitle";
import ArticlesSection from "../../../ui/articles/ArticlesSection";
import CategoriesMobile from "../../../ui/articles/CategoriesMobile";
import Container from "../../../ui/layouts/Container";
import { IonContent, IonPage } from "@ionic/react";
import { TopHeader } from "../../../ui/layouts/Headers";
import LoadingProvider from "../../../loading-provider";

const CategoryName = () => {
  const params = useParams();
  const [articles, setArticles] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    (async () => {
      const tags = categories[params.category];
      const name =
        categoryNames.find((c) => c.route.endsWith(params.category))?.name ??
        "";

      setTitle(name);

      try {
        const response = await fetch(`/api/categories/${params.category}`, {
          method: "POST",
          body: JSON.stringify({ tags }),
        });
        const result = await response.json();
        setArticles(result);
      } catch (err) {
        throw err;
      }
    })();
  }, [params]);

  return (
    <IonPage>
      <LoadingProvider>
        <TopHeader pageName={"Articles"} back />
        <IonContent>
          <Container>
            <div className="md:flex mt-6 justify-between">
              <div className="md:hidden">
                <CategoriesMobile title={title} />
              </div>
              <div>
                <ArticlesSection
                  articles={articles}
                  title={formatTitle(title)}
                />
              </div>
            </div>
          </Container>
        </IonContent>
      </LoadingProvider>
    </IonPage>
  );
};

export default CategoryName;
