import "./Article-card.styles.scss";

import ImageUrl from "../../assets/sand.jpg";

const ArticleCard = ({ author, title }) => {
  return (
    <div className="ArticleCard">
      <img src={ImageUrl} alt="placeholder" />
      <div className="CardBody">
        <p>
          <span>{author || "Unknown"}</span>
          <span>read more</span>
        </p>
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default ArticleCard;
