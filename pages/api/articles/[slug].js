import { getArticleBySlug } from "../data/getArticles";

const allArticles = require("../data/articles.json");

export default function handler(req, res) {
  if (req.method === "GET") {
    const { slug } = req.query;
    let article = allArticles.find((a) => a.articleRoute.startsWith(slug));
    const content = getArticleBySlug(slug, ["content"])?.content;
    article = {
      ...(article ?? {}),
      content,
    };
    return res.status(200).json(article);
  }
}
