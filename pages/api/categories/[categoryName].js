const allArticles = require("../data/articles.json");

export default function handler(req, res) {
  if (req.method === "POST") {
    let articles = [];
    if (req.query.categoryName === "latest") {
      articles = allArticles
        .sort(
          (a, b) =>
            new Date(b.datePublished).getTime() -
            new Date(a.datePublished).getTime()
        )
        .slice(0, 5);
    } else {
      const { tags } = JSON.parse(req.body);

      let filteredArticlesIndexes = new Set([]);
      for (let tag of tags ?? []) {
        for (let i = 0; i < allArticles.length; i++) {
          const article = allArticles[i];
          if (article.tags.indexOf(tag) > -1) {
            filteredArticlesIndexes.add(i);
          }
        }
      }
      filteredArticlesIndexes = [...filteredArticlesIndexes];
      articles = allArticles.filter(
        (a, i) => filteredArticlesIndexes.indexOf(i) > -1
      );
    }

    return res.status(200).json(articles);
  }
}
