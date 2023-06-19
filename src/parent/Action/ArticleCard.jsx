import React from "react";
import "./articleCard.css";
import Article from "../../assets/577c1f92dd0895182b8b480a.webp";

const ArticleCard = () => {
  return (
    <div className="container">
      <div className="articleCard__container">
        <img
          className="articleContainer__left"
          src={Article}
          alt="food article"
        />
        <div className="articleContainer__right">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum ut
          dolorum totam sunt, rerum harum vero iure necessitatibus earum
          blanditiis!
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
