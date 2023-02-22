import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./Articles.styles.scss";

import ArticleCard from "../article-card/Article-card.component";
import { getData } from "../../utilities/utils";

import { selectArticles } from "../../store/articles/articles.selectors";
import { setArticles } from "../../store/articles/articles.action";
import { selectSearchQuery } from "../../store/search/search.selector";

const Articles = () => {
  const [filteredArticles, setFilteredArticles] = useState([]);
  const dispatch = useDispatch();
  const articles = useSelector(selectArticles);
  const query = useSelector(selectSearchQuery);

  useEffect(() => {
    dispatch(setArticles(getData()));
  }, [articles, dispatch]);

  useEffect(() => {
    setFilteredArticles(articles);
  }, [articles]);

  useEffect(() => {
    setFilteredArticles(
      articles.filter((article) => article.topic.includes(query))
    );
  }, [query, articles]);

  return (
    <div className="Articles">
      {filteredArticles.map((article) => (
        <ArticleCard key={article._id} {...article} />
      ))}
    </div>
  );
};

export default Articles;
