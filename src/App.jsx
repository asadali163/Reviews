import { useState } from "react";
import reviews from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
const App = () => {
  const [index, setIndex] = useState(0);
  const { id, image, job, name, text } = reviews[index];
  const previous = (id) => {
    if (index === 0) setIndex(reviews.length - 1);
    else setIndex((previousValue) => previousValue - 1);
  };

  const next = (id) => {
    if (index === reviews.length - 1) setIndex(0);
    else setIndex((previousValue) => previousValue + 1);
  };
  const random = () => {
    const number = Math.floor(Math.random() * reviews.length);
    setIndex(number);
  };

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className=".author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button
            className="prev-btn"
            type="button"
            onClick={() => previous(id)}
          >
            <FaChevronLeft />
          </button>
          <button className="next-btn" type="button" onClick={() => next(id)}>
            <FaChevronRight />
          </button>
        </div>
        <button type="button" className="btn btn=hipster" onClick={random}>
          Surprise Me
        </button>
      </article>
    </main>
  );
};

export default App;
