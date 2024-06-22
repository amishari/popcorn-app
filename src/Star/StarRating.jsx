import { useState } from "react";
import "./Star.css";
export default function StarRating() {
  const [rating, setRating] = useState(0);
  const [tempRating, setTempRating] = useState(0);
  return (
    <div>
      <div className="icon">
        {Array.from({ length: 10 }).map((_, i) => (
          <Star
            key={i}
            rating={rating}
            onRating={() => setRating(i + 1)}
            onHoverIn={() => setTempRating(i + 1)}
            onHoverOut={() => setTempRating(0)}
            full={tempRating ? tempRating - 1 >= i : rating - 1 >= i}
          />
        ))}

        <span>{tempRating || rating}</span>
      </div>
    </div>
  );
}
function Star({ onRating, onHoverIn, onHoverOut, full }) {
  return (
    <div onClick={onRating} onMouseEnter={onHoverIn} onMouseLeave={onHoverOut}>
      {full ? <StarFull /> : <StarEmpty />}
    </div>
  );
}
function StarFull() {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 32 32"
      // fill={color}
      // stroke={color}
    >
      <path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z"></path>
    </svg>
    // <svg>
    //   <use xlinkHref="/src/assets/sprite.svg#icon-star-full"></use>
    // </svg>
  );
}
function StarEmpty() {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 32 32"
    >
      <path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798zM16 23.547l-6.983 3.671 1.334-7.776-5.65-5.507 7.808-1.134 3.492-7.075 3.492 7.075 7.807 1.134-5.65 5.507 1.334 7.776-6.983-3.671z"></path>
    </svg>
    // <svg>
    //   <use xlinkHref="/src/assets/sprite.svg#icon-star-empty"></use>
    // </svg>
  );
}
