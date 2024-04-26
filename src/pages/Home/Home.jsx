import css from "./Home.module.css";
import img from "../../pictures/map.png";
import Lottie from "react-lottie";
import animationData from "../../pictures/bee.json";

const Home = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className={css.homeWrapper}>
      <div className={css.homeText}>
        <h1 className={css.title}>Welcome to your Phonebook</h1>{" "}
        <Lottie
          className={css.catAnimation}
          options={defaultOptions}
          width={200}
          height={200}
        />
        <p>
          Here, you have the power to effortlessly add, remove, and customize
          your contacts. Dive in and stay organized like never before!
        </p>
      </div>

      <img src={img} alt="map" width={1200} />
    </div>
  );
};

export default Home;
