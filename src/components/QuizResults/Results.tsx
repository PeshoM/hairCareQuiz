import styles from "styles/results.module.css";
import { ResultsProps } from "interfaces/ResultsProps.interface";
import { FilteredProduct } from "interfaces/FilteredProduct.interface";
import { useResults } from "./useResults";

const Results = ({
  questionAnswers,
  setQuestionAnswers,
  length,
  setActiveAnswers,
}: ResultsProps) => {
  const {
    page,
    products,
    totalPages,
    loading,
    handleRetakeQuiz,
    handlePageBack,
    handlePageForward,
    handlePageChange,
    handleFavouriteProduct,
  } = useResults({
    questionAnswers,
    setQuestionAnswers,
    length,
    setActiveAnswers,
  });

  return (
    <div>
      {loading && (
        <div className={styles.loadingScreen}>
          <p>Loading...</p>
          <img src="loading.svg" alt="loading" />
        </div>
      )}
      <div className={styles.heroWrapper}>
        <img src="results.png" className={styles.heroImg} alt="Hero" />
        <img
          src="resultsBlur.png"
          className={styles.heroForegroundImg}
          alt="Foreground"
        />
        <div className={styles.heroContentWrapper}>
          <div className={styles.heroTextWrapper}>
            <h1>Build you everyday self care routine.</h1>
            <p>
              Perfect for if you're looking for soft, nourished skin, our
              moisturizing body washes are made with skin-natural nutrients that
              work with your skin to replenish moisture. With a light formula,
              the bubbly lather leaves your skin feeling cleansed and cared for.
              And by choosing relaxing fragrances you can add a moment of calm
              to the end of your day.
            </p>
          </div>
          <div className={styles.retakeButton}>
            <button onClick={handleRetakeQuiz}>Retake the quiz</button>
          </div>
        </div>
      </div>
      <div className={styles.slidesWrapper}>
        <div className={styles.recommendedProductsWrapper}>
          <div className={styles.slidesDiv}>
            <div className={styles.leftArrow} onClick={handlePageBack}>
              <img src="leftArrow.png" alt="leftArrow" />
            </div>
            <div className={styles.noteCard}>
              <div>
                <h2>Daily routine</h2>
                <p>
                  Perfect for if you're looking for soft, nourished skin, our
                  moisturizing body washes are made with skin-natural nutrients
                  that work with your skin to replenish moisture. With a light
                  formula, the bubbly lather leaves your skin feeling cleansed
                  and cared for. And by choosing relaxing fragrances you can add
                  a moment of calm to the end of your day.
                </p>
              </div>
            </div>
            {products?.map((product: FilteredProduct, index: number) => {
              if (!product) return <></>;
              return (
                <div className={styles.productCard}>
                  <button
                    className={styles.favouriteProduct}
                    onClick={() => handleFavouriteProduct(index)}
                  >
                    <img
                      className={styles.favouriteProduct}
                      src={
                        !product.favourite
                          ? "favouriteFalse.png"
                          : "favouriteTrue.png"
                      }
                      alt="favourite"
                    />
                  </button>
                  <img
                    src={`${product.images[0].src}`}
                    alt={`${product.title}`}
                  />
                  <div>
                    <h2>{product.title}</h2>
                    <p>{`$${product.variants[0].price}`}</p>
                  </div>
                </div>
              );
            })}
            <div className={styles.rightArrow} onClick={handlePageForward}>
              <img src="rightArrow.png" alt="rightArrow" />
            </div>
          </div>
        </div>
        {totalPages > 0 && (
          <div className={styles.pages}>
            {Array.from({ length: totalPages }).map((_page, index: number) => {
              return (
                <button
                  className={index + 1 === page ? styles.activePage : ""}
                  onClick={() => handlePageChange(index)}
                ></button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Results;
