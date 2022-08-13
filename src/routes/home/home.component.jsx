import aboutImage from "../../assets/main/aboutImage.jpg";
import mensImage from "../../assets/main/mens.jpg";
import womensImage from "../../assets/main/womens.jpg";
import Directory from "../../components/directory/directory.component";
import "./home.styles.scss";

const Home = () => {
  const categories = [
    {
      id: 0,
      title: "about",
      imageUrl: aboutImage,
    },
    {
      id: 1,
      title: "womens",
      imageUrl: womensImage,
    },
    {
      id: 2,
      title: "mens",
      imageUrl: mensImage,
    },
  ];

  return (
    <div>
      <div className="main-container">
        <Directory categories={categories} />
      </div>
      <div className="stripes"></div>
    </div>
  );
};
export default Home;
