import styles from "styles/home.module.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleStartQuiz = () => navigate("/question-1");

  return (
    <div>
      <div className={styles.heroWrapper}>
        <img className={styles.heroImg} src="home.png" alt="Hero" />
        <img
          className={styles.heroForegroundImg}
          src="homeBlur.png"
          alt="Foreground"
        />
        <div className={styles.heroContentWrapper}>
          <div className={styles.heroTextWrapper}>
            <h1>Build a self care routine suitable for you</h1>
            <p>
              Take out test to get a personalised self care routine based on
              your needs
            </p>
          </div>
          <div className={styles.heroButtonWrapper}>
            <button onClick={handleStartQuiz}>Start the quiz</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
