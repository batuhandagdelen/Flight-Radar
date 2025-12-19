import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import "@splidejs/react-splide/css";

const Gallery = ({ images }) => {
  const arr = images?.large
    ? images.large
    : images.medium
    ? images.medium
    : images?.thumbnails;

  return (
    <div className="gallery">
      {arr?.length > 0 ? (
        <Splide>
          {arr.map((item, key) => (
            <SplideSlide key={key}>
              <img src={item.src} alt="plane" />
            </SplideSlide>
          ))}
        </Splide>
      ) : (
        <div className="warning">
          <p>Fotograf İçeriği Bulunmuyor.</p>
        </div>
      )}
    </div>
  );
};

export default Gallery;
