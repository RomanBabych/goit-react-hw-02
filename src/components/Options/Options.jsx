import css from "./Options.module.css";

export default function Options({
  updateFeedback,
  resetFeedback,
  totalFeedback,
}) {
  return (
    <div className={css.buttonsWrapper}>
      <button className={css.optionsBtn} onClick={() => updateFeedback("good")}>
        Good
      </button>
      <button
        className={css.optionsBtn}
        onClick={() => updateFeedback("neutral")}
      >
        Neutral
      </button>
      <button className={css.optionsBtn} onClick={() => updateFeedback("bad")}>
        Bad
      </button>
      {totalFeedback > 0 && (
        <button className={css.optionsBtn} onClick={resetFeedback}>
          Reset
        </button>
      )}
    </div>
  );
}
