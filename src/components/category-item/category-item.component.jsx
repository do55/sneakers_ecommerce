import "./category-item.styles.scss";
import { Link } from "react-router-dom";

const CategoryItem = ({ category }) => {
  const { title, imageUrl, id } = category;

  if (id === 0) {
    return (
      <Link
        to="/about"
        className="category-container"
        style={{ alignItems: "flex-end" }}
      >
        <div
          className="background-image"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <h2>{title}</h2>
      </Link>
    );
  } else if (id === 1) {
    return (
      <div className="category-container" style={{ alignItems: "flex-start" }}>
        <div
          className="background-image"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <h2>{title}</h2>
      </div>
    );
  } else {
    return (
      <div className="category-container" style={{ alignItems: "center" }}>
        <div
          className="background-image"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <h2>{title}</h2>
      </div>
    );
  }
};

export default CategoryItem;
