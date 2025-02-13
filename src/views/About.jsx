import styles from "./cssv/About.module.css";

const About = () => {
  return (
    <div className={styles.about}>
      <h1>About</h1>
      <div className={styles.content}>
        <img
          src="../components/assets/images/aboutus.webp"
          alt="About DishDelights"
          className={styles.image}
        />
        <p>
          DishDelights is a vibrant global community that brings food lovers
          together through a shared passion for cooking and culinary
          exploration. With an extensive collection of recipes, we celebrate
          diverse cuisines and cater to all tastes and dietary needs. Our
          mission is to inspire and empower home cooks by providing detailed,
          easy-to-follow recipes that make creating delicious meals a joy for
          everyone. Join us and discover the world of flavours at your
          fingertips!
        </p>
      </div>
    </div>
  );
};

export default About;
