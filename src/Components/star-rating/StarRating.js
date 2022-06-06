import React from "react";
import { useState } from "react";
import styles from './StarRating.module.css';

const EMPTY_STAR =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Five-pointed_star.svg/1088px-Five-pointed_star.svg.png";
const FULL_STAR =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/1200px-Gold_Star.svg.png";


const StarRating = () => {
  const starIds = [1, 2, 3, 4, 5];
  const [hovered, setHovered] = useState(0);
  const [clicked, setClicked] = useState(0);

  const getImg = (id) => {
    return hovered >= id || clicked >= id ? FULL_STAR : EMPTY_STAR;
  };

  return (
    <div className = {styles.container}>
      {starIds.map((id) => (
       <img
         alt = "star"
          src={getImg(id)}
          onMouseEnter={() => {
            setHovered(id);
            if (id < clicked) setClicked(0);
          }}
          onClick={() => setClicked(id)}
          onMouseOut={() => setHovered(0)}
          width={50}
          height={50}
        />
      ))}
    </div>
  );
};

export default StarRating;
