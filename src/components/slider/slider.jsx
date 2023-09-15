import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import './slider.css';

function Sldie() {
  return (
    <SplideSlide>
      <a className="splide__slide-link" href="#">
        <img className="splide__slide-img" src="https://placehold.co/300x400.png" alt="" />
        <span className="splide__slide-name">Name</span>
      </a>
    </SplideSlide>
  );
}

function Slider({ title }) {
  return (
    <Splide
      tag="section"
      className="section"
      hasTrack={false}
      options={{
        gap: '0.75rem',
        rewind: true,
        perMove: 1,
        perPage: 5,
        pagination: false,
      }}
    >
      <div className="splide__container container">
        <div className="splide__head">
          <h2 className="splide__title">{title}</h2>
          <div className="splide__arrows" />
        </div>
        <SplideTrack>
          <Sldie />
          <Sldie />
          <Sldie />
          <Sldie />
          <Sldie />
          <Sldie />
          <Sldie />
          <Sldie />
          <Sldie />
          <Sldie />
        </SplideTrack>
      </div>
    </Splide>
  );
}

export { Slider };
